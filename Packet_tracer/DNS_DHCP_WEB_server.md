## Question: Simulate a network with DHCP server, DNA server and Web server<br>
Answer :<br/>

To simulate the network, we have created a network structure as shown below. It consists of a 1841 Router which has connection with two network. The left side of the router(Fa0/0) is connected to the Switch1, which is further connected to three different servers and a PC. We assign IP address of 192.168.2.1 to this innterface. The three different servers are DNS server, DHCP server and web server. The IP address, subnet mask, default gateway and address of DNS server is configured in these servers as shown in the figure. <br/>


![topology of dns web and dhcp server](https://github.com/Nabin9817/Computer-Networking/assets/149253579/181a8711-812e-40bf-8075-d04edca12d25)

To enable DHCP, we have created two pool in the DHCP server: serverPool and pcPool. In the serverPool, we have given the address of default gateway as 192.168.2.1 and address of DNS server as 192.168.2.1. The start IP address for this pool is configured to 192.168.2.5. Similarly, in the pcPool we have configured start IP address to 192.168.1.5 and default gateway to 192.168.1.1.<br/>
Now we have configured the DNS server. In the DNS option of services tab, we added the name of web as “yamprasad.com” and give the address to 192.168.2.4 which will map "yamprasad.com" to this IP.<br/>
Now we have configured the IP address on the right interface i.e. Fa0/1 to 192.168.1.1. We configured the IP helper command on Fa0/1 interface of router  which is required to get dynamic IP from DNS server which is located on another network. Then we enabled the IP configuration to DHCP in all the PCs so that PCs get the address from the DNS server.<br>
Then we have ping the gateway, DNS server and web server to check if they working perfectly or not. The result is shown below<br>

![Screenshot (390)](https://github.com/Nabin9817/Computer-Networking/assets/149253579/0d99d696-ecdf-4b9d-b1ec-bc293b182270)


Then we typed the url of the web in the web browser of PC0 and we get the result as shown below<br>

![Screenshot 2024-07-08 143756](https://github.com/Nabin9817/Computer-Networking/assets/149253579/cbe6627f-4f98-44ee-b639-b33aad3322a4)
