Question: simulate for network with DHCP server, DNA server and Web server
Answer :

To simulate the network, we created a network as shown below. It consists of a 1841 Router. It has connection with two network. In the left side the router  which has address of 192.168.2.1 is connected to the Switch1, which is further connected to three different servers and a PC. The three different servers are DNS server, DHCP server and web server. The IP address, subnet mask default gateway and address of DNS server is configured as shown in the figure. To enable DHCP we have created two pool in the DHCP server: serverPool and pcPool. In the serverPool we have given the address of default gateway as 192.168.2.1 and address of DNS server as 192.168.2.1. The start IP address is configured to 192.168.2.5  in this pool. Similarly, in the pcPool we have configured start IP address to 192.168.1.5 and default gateway to 192.168.1.1.
Then we have configured the DNS server.  In the DNS option of services tab we added the name of the as “web.com” and give the address to the web server i.e. 192.168.2.4 which will map web.com to this IP.
Now we need to configure the IP helper command on the right side of the router that is in the interface Fa0/1. Without IP herlper configuration pc can’t get Ip  from DNS server. Then we enabled the IPconfiguration to DHCP in all the PCs so that Pc get the address from the DNS server.
Then we have ping the gateway, DNS server and web server to check if they working perfectly  or not. The result is shown below

//picture

Then we typed the url of the webserver in the web browser of PC0 and we get the result as shown below

//picture
