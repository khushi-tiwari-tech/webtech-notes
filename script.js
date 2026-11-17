const U=[
{n:"Unit 1",t:"Internet Foundations",h:7,p:[
["History of the Internet",`<h4>Why it matters</h4><p>Every web technology in this course sits on the Internet, so its history explains why protocols such as TCP/IP, HTTP and DNS look the way they do.</p>
<h4>From research network to global network</h4><p>In the 1960s the US Department of Defense funded research into <b>packet switching</b>: splitting data into small packets that travel independently and are reassembled at the destination. This made networks more robust than circuit switching, because packets can take any available route. The result was <b>ARPANET</b>, which linked four nodes (UCLA, Stanford Research Institute, UC Santa Barbara and the University of Utah) in 1969.</p>
<table><tr><th>Year</th><th>Milestone</th></tr><tr><td>1971</td><td>Ray Tomlinson sends the first network email and picks the @ sign</td></tr><tr><td>1974</td><td>Vint Cerf and Bob Kahn publish the TCP/IP design</td></tr><tr><td>1983</td><td>ARPANET switches to TCP/IP on 1 January; DNS is designed</td></tr><tr><td>1986</td><td>NSFNET connects universities and supercomputer centres</td></tr><tr><td>1989–91</td><td>Tim Berners-Lee invents the Web at CERN: HTML, HTTP, URL, first browser</td></tr><tr><td>1993</td><td>Mosaic, the first widely used graphical browser</td></tr><tr><td>1994</td><td>Netscape Navigator; the W3C is founded</td></tr><tr><td>1995</td><td>Public Internet service starts in India through VSNL on 15 August</td></tr><tr><td>2004–05</td><td>Web 2.0: blogs, wikis, social networks, Ajax</td></tr><tr><td>2007 onward</td><td>Smartphones make mobile the main way to reach the Web</td></tr></table>
<h4>Internet vs World Wide Web</h4><p>The <b>Internet</b> is the physical and logical network of networks: cables, routers and the TCP/IP protocols. The <b>Web</b> is one service that runs on it, made of linked documents served over HTTP. Email, file transfer and online games also use the Internet but are not the Web.</p>
<div class="key"><b>Exam point:</b> ARPANET (1969) → TCP/IP (1983) → WWW (1989–91). The Web is an application of the Internet, not a synonym for it.</div>`],
["World Wide Web and HTML",`<h4>Web architecture</h4><p>The Web follows the <b>client-server model</b>. A browser (client) asks a web server for a resource and the server replies. Three standards make this work: the <b>URL</b> names the resource, <b>HTTP</b> transfers it and <b>HTML</b> describes it.</p>
<h4>Anatomy of a URL</h4><pre>https://www.example.com:443/courses/web.html?unit=1#intro
scheme   host            port path            query   fragment</pre><p>The scheme says which protocol to use, the host is resolved by DNS, the path locates the file or route, the query passes parameters and the fragment jumps to a part of the page (never sent to the server).</p>
<h4>HTML basics</h4><p>HTML (HyperText Markup Language) uses <b>elements</b> made of tags and attributes to mark up content. It describes structure and meaning, not appearance.</p>
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;&lt;meta charset="utf-8"&gt;&lt;title&gt;My page&lt;/title&gt;&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;p&gt;Read the &lt;a href="notes.html"&gt;notes&lt;/a&gt;.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
<ul><li><b>Head</b> holds metadata (title, charset, links to CSS and scripts); <b>body</b> holds visible content.</li><li><b>Semantic elements</b> such as header, nav, main, section, article, aside and footer help search engines and screen readers.</li><li><b>Attributes</b> add information: href, src, alt, id, class, style.</li></ul>
<h4>Versions</h4><p>HTML 2.0 (1995), 3.2 (1997), 4.01 (1999), XHTML 1.0 (2000, XML strict syntax) and HTML5 (2014) which added audio, video, canvas, local storage and form types without plugins.</p>
<h4>Static and dynamic pages</h4><p>A <b>static</b> page is a stored file sent as it is. A <b>dynamic</b> page is generated per request by server-side code (PHP, Java, Python, Node.js) using a database, or changed in the browser with JavaScript.</p>`],
["HTTP",`<h4>Overview</h4><p>HyperText Transfer Protocol is the application-layer protocol of the Web. It runs over TCP (port 80; HTTPS uses TLS on port 443) and is <b>stateless</b>: the server does not remember earlier requests unless cookies or sessions are used.</p>
<h4>Request message</h4><pre>GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
(blank line)
(optional body)</pre>
<h4>Response message</h4><pre>HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1256
(blank line)
&lt;html&gt;...&lt;/html&gt;</pre>
<h4>Methods</h4><ul><li><b>GET</b>: read a resource; <b>POST</b>: send data to create or process; <b>PUT</b>: replace; <b>DELETE</b>: remove; <b>HEAD</b>: headers only; <b>OPTIONS</b>: ask what is allowed.</li></ul>
<table><tr><th>Code</th><th>Class</th><th>Meaning</th></tr><tr><td>200</td><td>Success</td><td>OK</td></tr><tr><td>301 / 302</td><td>Redirect</td><td>Moved permanently / temporarily</td></tr><tr><td>304</td><td>Redirect</td><td>Not modified, use cached copy</td></tr><tr><td>400</td><td>Client error</td><td>Bad request</td></tr><tr><td>403 / 404</td><td>Client error</td><td>Forbidden / not found</td></tr><tr><td>500 / 503</td><td>Server error</td><td>Internal error / service unavailable</td></tr></table>
<h4>Cookies and sessions</h4><p>The server sends <code>Set-Cookie</code>; the browser returns it in a <code>Cookie</code> header on later requests, which lets sites keep logins and carts.</p>
<h4>Versions</h4><p>HTTP/1.0 opened a connection per request; HTTP/1.1 added persistent connections and the Host header; HTTP/2 multiplexes many requests on one connection with header compression; HTTP/3 uses QUIC over UDP to cut latency.</p>
<div class="key"><b>Exam point:</b> HTTP is stateless, text-based, request/response, and uses port 80 (443 for HTTPS).</div>`],
["SMTP",`<h4>Purpose</h4><p>Simple Mail Transfer Protocol <b>pushes</b> email from a sender's mail client to their server and between mail servers. It uses TCP port 25 between servers, 587 for client submission and 465 for SMTP over TLS.</p>
<h4>Mail system components</h4><ul><li><b>MUA</b> (mail user agent): Outlook, Gmail app.</li><li><b>MSA/MTA</b> (submission and transfer agents): relay the message toward the destination.</li><li><b>MDA</b> (delivery agent): places the message in the recipient's mailbox.</li></ul>
<h4>A sample dialogue</h4><pre>S: 220 mail.example.com ready
C: HELO client.example.org
S: 250 Hello
C: MAIL FROM:&lt;asha@example.org&gt;
S: 250 OK
C: RCPT TO:&lt;ravi@example.com&gt;
S: 250 OK
C: DATA
S: 354 End data with a line holding only a dot
C: Subject: Notes
C: Please read Unit 1.
C: .
S: 250 Message accepted
C: QUIT
S: 221 Bye</pre>
<h4>Key points</h4><ul><li>Replies are three-digit codes: 2xx success, 3xx need more input, 4xx temporary failure, 5xx permanent failure.</li><li>SMTP is a <b>push</b> protocol; reading mail needs POP3 or IMAP.</li><li>Original SMTP carries only 7-bit ASCII text, so attachments need <b>MIME</b>.</li><li>Open relays enable spam, so modern servers require authentication, SPF, DKIM and DMARC.</li></ul>`],
["POP3",`<h4>Purpose</h4><p>Post Office Protocol version 3 lets a client <b>download</b> mail from its mailbox on the server. It uses port 110 (995 with TLS).</p>
<h4>Three phases</h4><ol><li><b>Authorization</b>: client sends USER and PASS.</li><li><b>Transaction</b>: client lists and retrieves messages.</li><li><b>Update</b>: after QUIT the server deletes messages marked for deletion.</li></ol>
<h4>Common commands</h4><pre>USER asha        PASS ******
STAT             (count and size of mailbox)
LIST             (message numbers and sizes)
RETR 1           (download message 1)
DELE 1           (mark message 1 deleted)
QUIT</pre>
<h4>Behaviour</h4><p>By default POP3 downloads messages and removes them from the server, so mail ends up on one device. Most clients offer "leave a copy on server", but read and folder status still do not sync.</p>
<ul><li><b>Advantages:</b> simple, works offline after download, saves server space.</li><li><b>Disadvantages:</b> poor multi-device use, no server-side folders, risk of loss if the device fails.</li></ul>`],
["MIME",`<h4>Problem it solves</h4><p>SMTP was designed for plain 7-bit ASCII. <b>Multipurpose Internet Mail Extensions</b> let messages carry non-English text, images, audio, video and attachments by describing and encoding the content.</p>
<h4>MIME headers</h4><ul><li><code>MIME-Version: 1.0</code></li><li><code>Content-Type</code>: kind of data, e.g. <code>text/html; charset=utf-8</code></li><li><code>Content-Transfer-Encoding</code>: 7bit, 8bit, <b>base64</b> (binary as text, about 33% larger) or <b>quoted-printable</b> (mostly readable text)</li><li><code>Content-Disposition</code>: inline or attachment; filename</li></ul>
<table><tr><th>Type</th><th>Examples</th></tr><tr><td>text</td><td>text/plain, text/html, text/css</td></tr><tr><td>image</td><td>image/jpeg, image/png, image/svg+xml</td></tr><tr><td>audio / video</td><td>audio/mpeg, video/mp4</td></tr><tr><td>application</td><td>application/pdf, application/json</td></tr><tr><td>multipart</td><td>multipart/mixed, multipart/alternative, multipart/form-data</td></tr></table>
<h4>Multipart example</h4><pre>Content-Type: multipart/mixed; boundary=XYZ
--XYZ
Content-Type: text/plain
Please find the notes attached.
--XYZ
Content-Type: application/pdf
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename="notes.pdf"
JVBERi0xLjQK...
--XYZ--</pre>
<p>HTTP reuses MIME types: the <code>Content-Type</code> header tells the browser whether to display, play or download a response. <b>S/MIME</b> adds signing and encryption.</p>`],
["IMAP",`<h4>Purpose</h4><p>Internet Message Access Protocol keeps mail <b>on the server</b> and lets one or many clients view and manage it. Port 143 (993 with TLS).</p>
<h4>Features</h4><ul><li>Folders, flags (seen, answered, flagged) and deletions stay in sync on every device.</li><li>Clients can fetch only headers or a single attachment, saving bandwidth.</li><li>Server-side search and multiple simultaneous connections.</li></ul>
<h4>Common commands</h4><pre>a1 LOGIN asha ******
a2 SELECT INBOX
a3 FETCH 1 BODY[HEADER]
a4 SEARCH FROM "ravi"
a5 STORE 1 +FLAGS (\Seen)
a6 LOGOUT</pre>
<h4>POP3 compared with IMAP</h4><table><tr><th>Point</th><th>POP3</th><th>IMAP</th></tr><tr><td>Mail stored</td><td>On the client</td><td>On the server</td></tr><tr><td>Multiple devices</td><td>Poor</td><td>Excellent</td></tr><tr><td>Folders on server</td><td>No</td><td>Yes</td></tr><tr><td>Offline use</td><td>Natural</td><td>Needs caching</td></tr><tr><td>Server storage</td><td>Low</td><td>High</td></tr><tr><td>Ports</td><td>110 / 995</td><td>143 / 993</td></tr></table>`],
["Domain Name Server (DNS)",`<h4>Purpose</h4><p>People remember names; routers need IP addresses. DNS is a distributed database that maps names such as <code>www.example.com</code> to addresses such as <code>93.184.216.34</code>. It mostly uses UDP port 53 (TCP for large replies).</p>
<h4>Hierarchy</h4><p>Names read right to left: root (.), top-level domain (.com, .in, .edu), second-level domain (example), then subdomains (www). The tree is divided into <b>zones</b>, each run by an authoritative name server.</p>
<h4>How a lookup works</h4><ol><li>Browser and operating system caches are checked.</li><li>The query goes to the <b>recursive resolver</b> (your ISP or 8.8.8.8).</li><li>The resolver asks a <b>root server</b>, which points to the TLD servers.</li><li>The <b>TLD server</b> points to the domain's authoritative server.</li><li>The <b>authoritative server</b> returns the IP; the resolver caches it for its TTL and replies to you.</li></ol>
<table><tr><th>Record</th><th>Holds</th></tr><tr><td>A / AAAA</td><td>IPv4 / IPv6 address</td></tr><tr><td>CNAME</td><td>Alias to another name</td></tr><tr><td>MX</td><td>Mail server for the domain</td></tr><tr><td>NS</td><td>Authoritative name servers</td></tr><tr><td>TXT</td><td>Free text: SPF, verification</td></tr><tr><td>PTR</td><td>Reverse lookup, IP to name</td></tr></table>
<p><b>Recursive</b> queries ask the server to do all the work; <b>iterative</b> queries return a referral. Tools: <code>nslookup</code> and <code>dig</code>. DNSSEC adds digital signatures against spoofing.</p>`],
["Web Browsers",`<h4>Role</h4><p>A browser requests resources, interprets HTML, CSS and JavaScript, and shows the result. It is the main client of the Web.</p>
<h4>Main components</h4><ul><li><b>User interface:</b> address bar, tabs, buttons, bookmarks.</li><li><b>Browser engine:</b> coordinates the UI and rendering engine.</li><li><b>Rendering engine:</b> turns markup into pixels.</li><li><b>Networking:</b> HTTP, caching, cookies, TLS.</li><li><b>JavaScript engine:</b> executes scripts.</li><li><b>Storage:</b> cache, cookies, localStorage, IndexedDB.</li></ul>
<table><tr><th>Browser</th><th>Rendering engine</th><th>JS engine</th></tr><tr><td>Chrome, Edge, Opera</td><td>Blink</td><td>V8</td></tr><tr><td>Firefox</td><td>Gecko</td><td>SpiderMonkey</td></tr><tr><td>Safari</td><td>WebKit</td><td>JavaScriptCore</td></tr></table>
<h4>Rendering pipeline</h4><ol><li>Parse HTML into the <b>DOM</b> tree.</li><li>Parse CSS into the <b>CSSOM</b>.</li><li>Combine them into the <b>render tree</b> (visible nodes with styles).</li><li><b>Layout</b>: compute size and position.</li><li><b>Paint</b> and composite layers to the screen.</li></ol>
<h4>Security and tools</h4><p>Browsers sandbox tabs, enforce the <b>same-origin policy</b>, warn about unsafe sites and show HTTPS certificates. Developer tools (F12) inspect elements, network traffic and console errors.</p>`],
["Web Servers",`<h4>What a web server does</h4><p>A web server listens on a port, accepts connections, parses HTTP requests and sends back files or generated content. The word also means the machine that runs this software.</p>
<h4>Popular servers</h4><table><tr><th>Server</th><th>Notes</th></tr><tr><td>Apache HTTP Server</td><td>Open source, modular, .htaccess configuration</td></tr><tr><td>Nginx</td><td>Event-driven, fast static content, reverse proxy and load balancer</td></tr><tr><td>Microsoft IIS</td><td>Windows server, ASP.NET integration</td></tr><tr><td>Apache Tomcat</td><td>Runs Java servlets and JSP (a servlet container)</td></tr></table>
<h4>Request handling</h4><ol><li>Accept the TCP connection; decode the request line and headers.</li><li>Map the URL to a file or to an application handler using the configuration.</li><li>Static file: read it and return it with the right MIME type. Dynamic: run PHP, Java or Node code, which may query a database.</li><li>Send the status line, headers and body; write an entry to the access log.</li></ol>
<h4>Concepts</h4><ul><li><b>Virtual hosting:</b> one server hosts many domains using the Host header.</li><li><b>Web server vs application server:</b> the first serves HTTP and static files; the second runs business logic.</li><li><b>Reverse proxy and load balancer:</b> sit in front, spread traffic over many servers and cache content.</li><li><b>Security:</b> use HTTPS, keep software updated, restrict directory listing, limit permissions.</li></ul>
<div class="key"><b>Exam point:</b> web server = HTTP + static content; application server = business logic; default ports 80 and 443.</div>`]
]},
{n:"Unit 2",t:"Markup, Styling and XML",h:8,p:[
["Lists",`<code>&lt;ul&gt;</code> unordered, <code>&lt;ol&gt;</code> ordered, <code>&lt;dl&gt;</code> definition list with <code>&lt;dt&gt;</code>/<code>&lt;dd&gt;</code>. Items use <code>&lt;li&gt;</code>. Lists nest, and <code>list-style</code> in CSS changes markers.`],
["Tables",`<code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>, with <code>&lt;thead&gt;</code>/<code>&lt;tbody&gt;</code>/<code>&lt;tfoot&gt;</code>, <code>&lt;caption&gt;</code>. Merge cells with <code>colspan</code> and <code>rowspan</code>. Use tables for data, not layout.`],
["Images",`<code>&lt;img src alt width height&gt;</code>. Always give <code>alt</code> text. Formats: JPEG (photos), PNG (transparency), GIF, SVG (vector), WebP. Image maps use <code>&lt;map&gt;</code>/<code>&lt;area&gt;</code>; <code>&lt;picture&gt;</code> and <code>srcset</code> give responsive images.`],
["Forms",`<code>&lt;form action method&gt;</code> collects input. Controls: text, password, radio, checkbox, select, textarea, submit. HTML5 types: email, date, number, range, with <code>required</code> and <code>pattern</code> validation. GET puts data in the URL; POST in the body.`],
["Frames",`<code>&lt;frameset&gt;</code>/<code>&lt;frame&gt;</code> split a window into panes but are <b>obsolete</b>. Modern replacement is <code>&lt;iframe src&gt;</code> to embed another page (maps, videos). Frames hurt SEO, bookmarking and accessibility.`],
["CSS",`Cascading Style Sheets separate presentation from content. Inline, internal and external styles. Syntax: <code>selector{property:value}</code>. Selectors: element, .class, #id, descendant, pseudo-class. Cascade order depends on origin, specificity and source order. Box model: content, padding, border, margin. Layout: Flexbox, Grid, media queries.`],
["Dynamic HTML with JavaScript",`DHTML = HTML + CSS + JS + DOM. JavaScript reads and changes the page live. <pre>document.getElementById("t").style.color="red";
el.addEventListener("click",()=>alert("Hi"));</pre>Used for validation, menus, animations and updating content without reload.`],
["Document Type Definition (DTD)",`Defines legal structure of an XML document. <pre>&lt;!ELEMENT note (to,from,body)&gt;
&lt;!ELEMENT to (#PCDATA)&gt;
&lt;!ATTLIST note id CDATA #REQUIRED&gt;</pre>A document is <b>well-formed</b> (syntax OK) and <b>valid</b> (matches DTD). DTD is not XML itself and has no data types.`],
["XML Schemas (XSD)",`XML-based replacement for DTD with data types (string, integer, date), namespaces, min/max occurrence and custom types. Elements are declared with <code>xs:element</code>, <code>xs:complexType</code>, <code>xs:sequence</code>. More powerful but more verbose than DTD.`],
["Object Models",`A document is exposed as an object tree so programs can manipulate it. Browser models: DOM, BOM (window, navigator, location, history). XML has its own DOM. Each element, attribute and text becomes a node with properties and methods.`],
["Presenting XML",`XML stores data, not looks. Present it with CSS (simple) or <b>XSLT</b>, which transforms XML to HTML using templates and XPath. Or parse with JavaScript and render via the DOM.`],
["XML Processors: DOM and SAX",`<b>DOM</b> loads the whole tree in memory: random access, easy edit, heavy for big files. <b>SAX</b> is event-driven (startElement, characters, endElement): fast, low memory, forward-only and read-only. Choose DOM for small editable docs and SAX for large streams.`]]},
{n:"Unit 3",t:"Web Services and Ajax",h:7,p:[
["Introduction to Web Services",`Software components that communicate over a network using standard, platform-independent protocols (XML/JSON over HTTP). Example: a weather service called by a mobile app. Two styles: SOAP-based and REST-based. Benefits: interoperability, reuse, loose coupling.`],
["UDDI",`Universal Description, Discovery and Integration: a registry where providers publish and clients find services. Structure: white pages (business info), yellow pages (categories), green pages (technical binding). Rarely used publicly today.`],
["SOAP",`Simple Object Access Protocol: XML message format. Structure: Envelope, Header (optional), Body, Fault. Transported over HTTP or SMTP. Strict, extensible and supports WS-Security, but verbose compared to REST/JSON.`],
["WSDL",`Web Services Description Language: XML contract describing a service. Parts: <code>types</code>, <code>message</code>, <code>portType</code> (operations), <code>binding</code> (protocol), <code>service</code> (endpoint address). Tools generate client stubs from it.`],
["Web Service Architecture",`Three roles: <b>provider</b>, <b>requestor</b>, <b>registry</b>. Flow: publish (UDDI), find, bind and invoke (SOAP). Layers: transport (HTTP), messaging (SOAP), description (WSDL), discovery (UDDI).`],
["Developing and Deploying Web Services",`Steps: write the business logic, expose it as a service (JAX-WS, ASP.NET, Flask), generate WSDL, deploy on an application server (Tomcat, Axis2), publish endpoint, then test with SoapUI or a generated client. Secure with HTTPS and tokens.`],
["Ajax: Improving Performance",`Asynchronous JavaScript and XML fetches data in the background and updates part of a page. Benefits: no full reload, less bandwidth, responsive UI. Used by live search, chat, infinite scroll.`],
["Programming in Ajax",`<pre>fetch("/api/user/1")
 .then(r=>r.json())
 .then(d=>out.textContent=d.name);</pre>Older approach: <code>XMLHttpRequest</code> with <code>readyState</code> 4 and <code>status</code> 200. Handle errors, show loading states, and note same-origin policy (CORS).`],
["CORBA",`Common Object Request Broker Architecture (OMG): lets objects in different languages and machines call each other. Interfaces are written in <b>IDL</b>; the <b>ORB</b> routes calls through stubs and skeletons; IIOP is the wire protocol. Powerful but complex, largely replaced by web services.`]]},
{n:"Unit 4",t:"Web 2.0, Web 3.0 and Modern Trends",h:7,p:[
["Web 2.0: Interactive and Social Web",`The read-write web: users create content. <b>Blogs</b> (chronological posts), <b>wikis</b> (collaborative editing, e.g. Wikipedia), <b>social networks</b> (profiles, feeds, sharing). Traits: participation, rich UIs, tagging, user-generated content.`],
["Technologies Behind Web 2.0: AJAX and RSS",`AJAX gives desktop-like responsiveness. <b>RSS</b> is an XML feed format (title, link, description, items) letting readers subscribe to updates from many sites. Other pieces: JavaScript frameworks, APIs, tagging.`],
["Ruby on Rails",`Full-stack framework in Ruby. Principles: <b>MVC</b>, convention over configuration, DRY. Features: Active Record ORM, scaffolding, migrations, routing. Good for rapid development of Web 2.0 apps.`],
["Open APIs",`Public interfaces that let developers use a service data and functions (Google Maps, Twitter, payment gateways). Usually REST + JSON with API keys or OAuth. They enable mashups and ecosystems.`],
["Web 3.0: Semantic Web",`Data with machine-understandable meaning, so software can reason over it. Stack: URI, XML, RDF, RDFS/OWL ontologies, SPARQL queries. Example: knowing that "Dehradun" is a city in Uttarakhand, India.`],
["Widgets and Mashups",`<b>Widgets</b> are small embeddable components (weather box, like button). <b>Mashups</b> combine data from two or more sources into a new service, e.g. property listings plotted on a map via Open APIs.`],
["RDF",`Resource Description Framework: data as <b>triples</b> (subject, predicate, object), each identified by URIs. Example: <code>:Asha :studies :WebTech</code>. Serialised as RDF/XML, Turtle or JSON-LD. Forms a graph that can be queried with SPARQL.`],
["Web-Based Information Systems",`Systems that deliver information and transactions through a browser: e-commerce, university portals, banking, ERP. Three tiers: presentation, business logic, database. Concerns: security, scalability, availability.`],
["Search Engines",`Pipeline: <b>crawl</b> (bots follow links), <b>index</b> (inverted index of words), <b>rank</b> (PageRank, relevance, freshness), <b>serve</b>. SEO improves visibility through content, speed and links.`],
["Recommender Systems",`Suggest items a user may like. Types: <b>collaborative filtering</b> (similar users), <b>content-based</b> (similar items), <b>hybrid</b>. Used by Netflix, Amazon. Challenges: cold start, sparsity, privacy.`],
["Benefits of Blockchain",`Distributed ledger of hash-linked blocks. Benefits: decentralisation, immutability, transparency, traceability, no middleman, smart contracts. Web uses: payments, identity, supply chain, certificates.`],
["Edge Computing",`Processes data near users (CDN nodes, edge functions) instead of one central server. Gains: lower latency, less bandwidth, better offline resilience and privacy. Examples: Cloudflare Workers, IoT gateways.`],
["Dark Mode in Web Development",`Reduces glare and can save OLED battery. Implement with CSS variables and <code>@media (prefers-color-scheme:dark)</code>, plus a manual toggle storing the choice. Keep contrast accessible and set <code>color-scheme</code>.`]]},
{n:"Unit 5",t:"Web 4.0 and the Future",h:7,p:[
["AI-Powered Web and Personalized Content",`Web 4.0 is the intelligent, symbiotic web. AI personalises feeds, search, chatbots and ads, and generates content. Techniques: ML, NLP, recommendation. Concerns: bias, privacy, misinformation, explainability.`],
["Decentralized Web and Blockchain Integration",`DWeb moves data from central servers to peer networks (IPFS, Solid). Blockchain adds identity (wallets), ownership (NFTs), and dApps with smart contracts. Users control their data; trade-offs are speed, cost and usability.`],
["Internet of Things in Web Development",`Everyday devices with sensors connect to the web. Protocols: MQTT, CoAP, HTTP, WebSockets. Web dashboards visualise live data and send commands. Issues: security, device management, standards.`],
["AR and VR in the Web",`<b>WebXR</b> API brings immersive experiences to browsers; libraries: Three.js, A-Frame. AR overlays virtual objects on the real world (product preview); VR is a fully virtual space. Needs performance optimisation.`],
["Smart Web and Adaptive Interfaces",`The smart web understands context. Adaptive interfaces change layout, content or accessibility options based on device, location, behaviour or ability: voice UI, auto dark mode, personalised dashboards.`],
["Web Automation",`Scripts that act on sites without a human: testing (Selenium, Playwright), scraping, workflow bots, CI checks. Respect robots.txt and terms of service. AI agents now automate browsing tasks.`],
["Impact of 5G on Web Technologies",`Speeds up to gigabit, latency of a few milliseconds, huge device density. Enables rich AR/VR, real-time streaming, mass IoT and edge computing. Developers can ship richer media but should still optimise for variable networks.`]]}];
const $=s=>document.querySelector(s);let done={},cur=0;
try{done=JSON.parse(localStorage.getItem("wt-done")||"{}")}catch(e){}
const save=()=>{try{localStorage.setItem("wt-done",JSON.stringify(done))}catch(e){}};
const total=U.reduce((a,u)=>a+u.p.length,0);
function prog(){const c=Object.values(done).filter(Boolean).length;$("#pt").textContent=c+" of "+total+" topics done";$("#pb").style.width=c/total*100+"%"}
function render(){const q=$("#q").value.trim().toLowerCase();let h="",any=false;
U.forEach((u,ui)=>{if(!q&&ui!==cur)return;let b="";
u.p.forEach((p,i)=>{if(q&&!(p[0]+p[1]).toLowerCase().includes(q))return;any=true;const k=ui+"-"+i;
b+=`<details ${q?"open":""}><summary><input type="checkbox" data-k="${k}" ${done[k]?"checked":""} aria-label="Mark done"> ${p[0]}</summary><div class="n">${p[1]}</div></details>`});
if(b)h+=`<div class="uhead"><h2>${u.n}: ${u.t}</h2><span class="ui">${u.p.length} topics · ${u.h} lecture hours</span></div>${b}`});
$("#m").innerHTML=any?h:'<p class="empty">No topic matches that search. Try a shorter word such as "xml" or "dns".</p>';
document.querySelectorAll("#tabs button").forEach((b,i)=>b.classList.toggle("act",i===cur&&!q));prog()}
U.forEach((u,i)=>{const b=document.createElement("button");b.textContent=u.n+" · "+u.t;b.onclick=()=>{cur=i;$("#q").value="";render();scrollTo(0,$("#tabs").offsetTop-60)};$("#tabs").append(b)});
$("#m").addEventListener("click",e=>{const k=e.target.dataset&&e.target.dataset.k;if(k){done[k]=e.target.checked;save();prog()}});
$("#q").oninput=render;
$("#th").onclick=()=>{const r=document.documentElement,d=getComputedStyle(r).getPropertyValue("--bg").trim()==="#0e1626";r.dataset.theme=d?"light":"dark"};
render();
