import { open } from "./torrent-parser.js";
import { getPeers } from "./tracker.js";
import download from "./download.js";

const torrent = open(process.argv[2]);

getPeers(torrent, (peers) => {
  console.log("list of peers: ", peers);
});

download(torrent, torrent.info.name);
