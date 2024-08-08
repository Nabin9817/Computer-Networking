import * as fs from "fs";
import bencode from "bencode";
import crypto from "crypto";
import { Buffer } from "buffer";

export const BLOCK_LEN = Math.pow(2, 14);

export const open = (filepath) => {
  return bencode.decode(fs.readFileSync(filepath));
};

export const size = (torrent) => {
  const size = torrent.info.files
    ? torrent.info.files
        .map((file) => BigInt(file.length))
        .reduce((a, b) => a + b)
    : BigInt(torrent.info.length);

  // Convert BigInt to Buffer
  const buffer = Buffer.alloc(8); // 8 bytes for 64-bit
  buffer.writeBigUInt64BE(size);
  return buffer;
};

export const infoHash = (torrent) => {
  // console.log("ffffff", torrent);
  // console.log("ffffff", torrent.info);
  const info = bencode.encode(torrent.info);
  return crypto.createHash("sha1").update(info).digest();
};

export const pieceLen = (torrent, pieceIndex) => {
  // const totalLength = BigInt(size(torrent).readUIntBE(0, 8));
  const totalLength = size(torrent).readBigUInt64BE(0); //convert to BigUint
  const pieceLength = BigInt(torrent.info["piece length"]);

  const lastPieceLength = totalLength % pieceLength;
  const lastPieceIndex = totalLength / pieceLength;

  return lastPieceIndex === BigInt(pieceIndex) ? lastPieceLength : pieceLength;
};

export const blocksPerPiece = (torrent, pieceIndex) => {
  const pieceLength = pieceLen(torrent, pieceIndex);
  return Math.ceil(Number(pieceLength) / BLOCK_LEN);
};

export const blockLen = (torrent, pieceIndex, blockIndex) => {
  const pieceLength = pieceLen(torrent, pieceIndex);

  const lastPieceLength = Number(pieceLength) % BLOCK_LEN;
  // const lastPieceIndex = Math.floor(pieceLength / BLOCK_LEN);

  // return blockIndex === lastPieceIndex ? lastPieceLength : BLOCK_LEN;
  const lastPieceIndex = Math.floor(Number(pieceLength) / BLOCK_LEN); // changes into Number due to compatibility issues

  return blockIndex === lastPieceIndex ? Number(lastPieceLength) : BLOCK_LEN; // changes into Number due to compatibility issues
};
