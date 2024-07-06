# Question : Simulate a ping request from a one network to another network.
Answer: 

To simulate a ping request, we have created a network with three 1841 routers i.e. Router1, Router2 and Router3. Three switches are connected to three routers and
PC is connected to each switch. We have added two serial pots to each router so that routers could be connected to each other. Serial port 0/0/0 of  Router1 is
connected to the serial port/0/0/0 of Router2 through the serial DCE connector. Similarly port 0/1/0 of Router1 is connected to the port 0/1/0 of Router2 and port 
0/0/1 of Router3 is connected to the port 0/0/1 of Router2. Likewise fastethernet port of each router is connected to the respective switch and then to the end device throuch the copper straight wire.

Now we have configured the ip address and subnet mask to each port. As each router has three connections, so we have assigned three different network id to each port, like in the serial port 0/0/0 of Router1, we have assigned the address as 192.168.100.1 which has connection with Router3, in serial port 0/1/0, we have assigned address to 10.10.10.1 which has connection with Router2 and 172.168.17.1 to the fastethernet port which has connection to the switch and finally to PC0. The subnet mask of each port is assigned to 255.255.255.0

Now we have assigned the ip address, subnet mask and default gateway to each PC. We have assigned the ip address of PC0 as 172.16.17.2, subnet mask as 255.255.255.0 and default gateway address as 172.16.17.1. Similar case for all other end devices as well.
To have communication, now we need to configure routing. We have used static method of routing. For example, for Router1 we have added to next hop as 10.10.1.2 and 192.168.100.2. With this all our configuration comes to end. Now we can ping from any PC of a network to another PC .

The pinging from PC0 to Pc1 gives the following output.
//Picture
Likewise pinging form PC1 t0 PC2 gives the following output.
//picture
