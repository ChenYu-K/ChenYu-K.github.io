
<!DOCTYPE html>
<title>Getting highlight.js</title>
<link rel="stylesheet" href="/static/styles.css">
<link rel="shortcut icon" type="image/png" href="/static/favicon.png" />

<script src="/static/highlight.site.pack.js"></script>

<script>hljs.highlightAll();</script>
<script>
  addEventListener('load', function() {
    var state = JSON.parse(localStorage.getItem('download-form')) || {};
    var checkboxes = document.querySelectorAll("#download-form input[type='checkbox']");
    Array.prototype.forEach.call(checkboxes, function(checkbox){
      if (!state.hasOwnProperty(checkbox.name)) {
        state[checkbox.name] = checkbox.checked ? 1 : 0;
      }
      checkbox.checked = state[checkbox.name] === 1;
      checkbox.addEventListener('click', function() {
        state[checkbox.name] = checkbox.checked ? 1 : 0;
        localStorage.setItem('download-form', JSON.stringify(state));
      });
    });
  });
</script>

<link rel="stylesheet" href="/static/code.css">

<div id="header">
  <h1>Getting <a href="/">highlight.js</a></h1>
</div>


<div id="content">

  <h2>Hosted</h2>

  
  <p>A prebuilt version of highlight.js with 34 commonly used languages is hosted by following CDNs:

  <div id="cdns">
  
  <h3>cdnjs</h3>
<pre><code>&lt;link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"&gt;&lt;/script&gt;
</code></pre>
  
  <h3>jsdelivr</h3>
<pre><code>&lt;link rel="stylesheet"
      href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/default.min.css"&gt;
&lt;script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/highlight.min.js"&gt;&lt;/script&gt;
</code></pre>
  
  <h3>unpkg</h3>
<pre><code>&lt;link rel="stylesheet"
      href="//unpkg.com/@highlightjs/cdn-assets@11.2.0/styles/default.min.css"&gt;
&lt;script src="//unpkg.com/@highlightjs/cdn-assets@11.2.0/highlight.min.js"&gt;&lt;/script&gt;
</code></pre>
  
  </div>

  <p>You can find the list of commonly used languages below in the custom download form.

  <p>For other available styles look into the highlight.js <a href="https://github.com/highlightjs/highlight.js/tree/main/src/styles">styles directory</a> (and don't forget to add ".min" before ".css").
  

  <h2>Custom package</h2>

  <p>You can download a custom bundle including only the languages you need.

  <form id="download-form" action="/download/" method="post">
    <input type="hidden" name="csrfmiddlewaretoken" value="5X3iQWdf8yd4ohGaDvbTjfkOK9JFFVlhNLj2gAakt0BcurYEYbjeQ9ciRfviUzcR">
    <p><b>Common</b>
    <ul>
      
      <li><label><input type="checkbox" name="bash.js" checked> Bash</label>
      
      <li><label><input type="checkbox" name="c.js" checked> C</label>
      
      <li><label><input type="checkbox" name="csharp.js" checked> C#</label>
      
      <li><label><input type="checkbox" name="cpp.js" checked> C++</label>
      
      <li><label><input type="checkbox" name="css.js" checked> CSS</label>
      
      <li><label><input type="checkbox" name="diff.js" checked> Diff</label>
      
      <li><label><input type="checkbox" name="go.js" checked> Go</label>
      
      <li><label><input type="checkbox" name="xml.js" checked> HTML, XML</label>
      
      <li><label><input type="checkbox" name="json.js" checked> JSON</label>
      
      <li><label><input type="checkbox" name="java.js" checked> Java</label>
      
      <li><label><input type="checkbox" name="javascript.js" checked> JavaScript</label>
      
      <li><label><input type="checkbox" name="kotlin.js" checked> Kotlin</label>
      
      <li><label><input type="checkbox" name="less.js" checked> Less</label>
      
      <li><label><input type="checkbox" name="lua.js" checked> Lua</label>
      
      <li><label><input type="checkbox" name="makefile.js" checked> Makefile</label>
      
      <li><label><input type="checkbox" name="markdown.js" checked> Markdown</label>
      
      <li><label><input type="checkbox" name="objectivec.js" checked> Objective-C</label>
      
      <li><label><input type="checkbox" name="php.js" checked> PHP</label>
      
      <li><label><input type="checkbox" name="php-template.js" checked> PHP Template</label>
      
      <li><label><input type="checkbox" name="perl.js" checked> Perl</label>
      
      <li><label><input type="checkbox" name="plaintext.js" checked> Plain text</label>
      
      <li><label><input type="checkbox" name="python.js" checked> Python</label>
      
      <li><label><input type="checkbox" name="python-repl.js" checked> Python REPL</label>
      
      <li><label><input type="checkbox" name="r.js" checked> R</label>
      
      <li><label><input type="checkbox" name="ruby.js" checked> Ruby</label>
      
      <li><label><input type="checkbox" name="rust.js" checked> Rust</label>
      
      <li><label><input type="checkbox" name="scss.js" checked> SCSS</label>
      
      <li><label><input type="checkbox" name="sql.js" checked> SQL</label>
      
      <li><label><input type="checkbox" name="shell.js" checked> Shell Session</label>
      
      <li><label><input type="checkbox" name="swift.js" checked> Swift</label>
      
      <li><label><input type="checkbox" name="ini.js" checked> TOML, also INI</label>
      
      <li><label><input type="checkbox" name="typescript.js" checked> TypeScript</label>
      
      <li><label><input type="checkbox" name="vbnet.js" checked> Visual Basic .NET</label>
      
      <li><label><input type="checkbox" name="yaml.js" checked> YAML</label>
      
    </ul>
    <p><b>Other</b>
    <ul>
      
      <li><label><input type="checkbox" name="properties.js"> .properties</label>
      
      <li><label><input type="checkbox" name="1c.js"> 1C:Enterprise</label>
      
      <li><label><input type="checkbox" name="armasm.js"> ARM Assembly</label>
      
      <li><label><input type="checkbox" name="avrasm.js"> AVR Assembly</label>
      
      <li><label><input type="checkbox" name="actionscript.js"> ActionScript</label>
      
      <li><label><input type="checkbox" name="ada.js"> Ada</label>
      
      <li><label><input type="checkbox" name="angelscript.js"> AngelScript</label>
      
      <li><label><input type="checkbox" name="accesslog.js"> Apache Access Log</label>
      
      <li><label><input type="checkbox" name="apache.js"> Apache config</label>
      
      <li><label><input type="checkbox" name="applescript.js"> AppleScript</label>
      
      <li><label><input type="checkbox" name="arcade.js"> ArcGIS Arcade</label>
      
      <li><label><input type="checkbox" name="arduino.js"> Arduino</label>
      
      <li><label><input type="checkbox" name="asciidoc.js"> AsciiDoc</label>
      
      <li><label><input type="checkbox" name="aspectj.js"> AspectJ</label>
      
      <li><label><input type="checkbox" name="abnf.js"> Augmented Backus-Naur Form</label>
      
      <li><label><input type="checkbox" name="autohotkey.js"> AutoHotkey</label>
      
      <li><label><input type="checkbox" name="autoit.js"> AutoIt</label>
      
      <li><label><input type="checkbox" name="awk.js"> Awk</label>
      
      <li><label><input type="checkbox" name="basic.js"> BASIC</label>
      
      <li><label><input type="checkbox" name="bnf.js"> Backus–Naur Form</label>
      
      <li><label><input type="checkbox" name="dos.js"> Batch file (DOS)</label>
      
      <li><label><input type="checkbox" name="brainfuck.js"> Brainfuck</label>
      
      <li><label><input type="checkbox" name="cal.js"> C/AL</label>
      
      <li><label><input type="checkbox" name="cmake.js"> CMake</label>
      
      <li><label><input type="checkbox" name="csp.js"> CSP</label>
      
      <li><label><input type="checkbox" name="cos.js"> Caché Object Script</label>
      
      <li><label><input type="checkbox" name="capnproto.js"> Cap’n Proto</label>
      
      <li><label><input type="checkbox" name="ceylon.js"> Ceylon</label>
      
      <li><label><input type="checkbox" name="clean.js"> Clean</label>
      
      <li><label><input type="checkbox" name="clojure.js"> Clojure</label>
      
      <li><label><input type="checkbox" name="clojure-repl.js"> Clojure REPL</label>
      
      <li><label><input type="checkbox" name="coffeescript.js"> CoffeeScript</label>
      
      <li><label><input type="checkbox" name="coq.js"> Coq</label>
      
      <li><label><input type="checkbox" name="crystal.js"> Crystal</label>
      
      <li><label><input type="checkbox" name="d.js"> D</label>
      
      <li><label><input type="checkbox" name="dns.js"> DNS Zone</label>
      
      <li><label><input type="checkbox" name="dart.js"> Dart</label>
      
      <li><label><input type="checkbox" name="delphi.js"> Delphi</label>
      
      <li><label><input type="checkbox" name="dts.js"> Device Tree</label>
      
      <li><label><input type="checkbox" name="django.js"> Django</label>
      
      <li><label><input type="checkbox" name="dockerfile.js"> Dockerfile</label>
      
      <li><label><input type="checkbox" name="dust.js"> Dust</label>
      
      <li><label><input type="checkbox" name="erb.js"> ERB (Embedded Ruby)</label>
      
      <li><label><input type="checkbox" name="elixir.js"> Elixir</label>
      
      <li><label><input type="checkbox" name="elm.js"> Elm</label>
      
      <li><label><input type="checkbox" name="erlang.js"> Erlang</label>
      
      <li><label><input type="checkbox" name="erlang-repl.js"> Erlang REPL</label>
      
      <li><label><input type="checkbox" name="excel.js"> Excel formulae</label>
      
      <li><label><input type="checkbox" name="ebnf.js"> Extended Backus-Naur Form</label>
      
      <li><label><input type="checkbox" name="fsharp.js"> F#</label>
      
      <li><label><input type="checkbox" name="fix.js"> FIX</label>
      
      <li><label><input type="checkbox" name="flix.js"> Flix</label>
      
      <li><label><input type="checkbox" name="fortran.js"> Fortran</label>
      
      <li><label><input type="checkbox" name="gcode.js"> G-code (ISO 6983)</label>
      
      <li><label><input type="checkbox" name="gams.js"> GAMS</label>
      
      <li><label><input type="checkbox" name="gauss.js"> GAUSS</label>
      
      <li><label><input type="checkbox" name="glsl.js"> GLSL</label>
      
      <li><label><input type="checkbox" name="gml.js"> GML</label>
      
      <li><label><input type="checkbox" name="gherkin.js"> Gherkin</label>
      
      <li><label><input type="checkbox" name="golo.js"> Golo</label>
      
      <li><label><input type="checkbox" name="gradle.js"> Gradle</label>
      
      <li><label><input type="checkbox" name="groovy.js"> Groovy</label>
      
      <li><label><input type="checkbox" name="haml.js"> HAML</label>
      
      <li><label><input type="checkbox" name="hsp.js"> HSP</label>
      
      <li><label><input type="checkbox" name="http.js"> HTTP</label>
      
      <li><label><input type="checkbox" name="handlebars.js"> Handlebars</label>
      
      <li><label><input type="checkbox" name="haskell.js"> Haskell</label>
      
      <li><label><input type="checkbox" name="haxe.js"> Haxe</label>
      
      <li><label><input type="checkbox" name="hy.js"> Hy</label>
      
      <li><label><input type="checkbox" name="irpf90.js"> IRPF90</label>
      
      <li><label><input type="checkbox" name="isbl.js"> ISBL</label>
      
      <li><label><input type="checkbox" name="inform7.js"> Inform 7</label>
      
      <li><label><input type="checkbox" name="x86asm.js"> Intel x86 Assembly</label>
      
      <li><label><input type="checkbox" name="jboss-cli.js"> JBoss CLI</label>
      
      <li><label><input type="checkbox" name="julia.js"> Julia</label>
      
      <li><label><input type="checkbox" name="julia-repl.js"> Julia REPL</label>
      
      <li><label><input type="checkbox" name="ldif.js"> LDIF</label>
      
      <li><label><input type="checkbox" name="llvm.js"> LLVM IR</label>
      
      <li><label><input type="checkbox" name="lsl.js"> LSL (Linden Scripting Language)</label>
      
      <li><label><input type="checkbox" name="latex.js"> LaTeX</label>
      
      <li><label><input type="checkbox" name="lasso.js"> Lasso</label>
      
      <li><label><input type="checkbox" name="leaf.js"> Leaf</label>
      
      <li><label><input type="checkbox" name="lisp.js"> Lisp</label>
      
      <li><label><input type="checkbox" name="livecodeserver.js"> LiveCode</label>
      
      <li><label><input type="checkbox" name="livescript.js"> LiveScript</label>
      
      <li><label><input type="checkbox" name="mel.js"> MEL</label>
      
      <li><label><input type="checkbox" name="mipsasm.js"> MIPS Assembly</label>
      
      <li><label><input type="checkbox" name="matlab.js"> Matlab</label>
      
      <li><label><input type="checkbox" name="maxima.js"> Maxima</label>
      
      <li><label><input type="checkbox" name="mercury.js"> Mercury</label>
      
      <li><label><input type="checkbox" name="axapta.js"> Microsoft X++</label>
      
      <li><label><input type="checkbox" name="routeros.js"> Microtik RouterOS script</label>
      
      <li><label><input type="checkbox" name="mizar.js"> Mizar</label>
      
      <li><label><input type="checkbox" name="mojolicious.js"> Mojolicious</label>
      
      <li><label><input type="checkbox" name="monkey.js"> Monkey</label>
      
      <li><label><input type="checkbox" name="moonscript.js"> MoonScript</label>
      
      <li><label><input type="checkbox" name="n1ql.js"> N1QL</label>
      
      <li><label><input type="checkbox" name="nsis.js"> NSIS</label>
      
      <li><label><input type="checkbox" name="nestedtext.js"> NestedText</label>
      
      <li><label><input type="checkbox" name="nginx.js"> Nginx config</label>
      
      <li><label><input type="checkbox" name="nim.js"> Nim</label>
      
      <li><label><input type="checkbox" name="nix.js"> Nix</label>
      
      <li><label><input type="checkbox" name="node-repl.js"> Node REPL</label>
      
      <li><label><input type="checkbox" name="ocaml.js"> OCaml</label>
      
      <li><label><input type="checkbox" name="openscad.js"> OpenSCAD</label>
      
      <li><label><input type="checkbox" name="ruleslanguage.js"> Oracle Rules Language</label>
      
      <li><label><input type="checkbox" name="oxygene.js"> Oxygene</label>
      
      <li><label><input type="checkbox" name="pf.js"> Packet Filter config</label>
      
      <li><label><input type="checkbox" name="parser3.js"> Parser3</label>
      
      <li><label><input type="checkbox" name="pony.js"> Pony</label>
      
      <li><label><input type="checkbox" name="pgsql.js"> PostgreSQL and PL/pgSQL</label>
      
      <li><label><input type="checkbox" name="powershell.js"> PowerShell</label>
      
      <li><label><input type="checkbox" name="processing.js"> Processing</label>
      
      <li><label><input type="checkbox" name="prolog.js"> Prolog</label>
      
      <li><label><input type="checkbox" name="protobuf.js"> Protocol Buffers</label>
      
      <li><label><input type="checkbox" name="puppet.js"> Puppet</label>
      
      <li><label><input type="checkbox" name="purebasic.js"> PureBASIC</label>
      
      <li><label><input type="checkbox" name="profile.js"> Python profiler</label>
      
      <li><label><input type="checkbox" name="q.js"> Q</label>
      
      <li><label><input type="checkbox" name="qml.js"> QML</label>
      
      <li><label><input type="checkbox" name="reasonml.js"> ReasonML</label>
      
      <li><label><input type="checkbox" name="rib.js"> RenderMan RIB</label>
      
      <li><label><input type="checkbox" name="rsl.js"> RenderMan RSL</label>
      
      <li><label><input type="checkbox" name="roboconf.js"> Roboconf</label>
      
      <li><label><input type="checkbox" name="sas.js"> SAS</label>
      
      <li><label><input type="checkbox" name="sml.js"> SML (Standard ML)</label>
      
      <li><label><input type="checkbox" name="sqf.js"> SQF</label>
      
      <li><label><input type="checkbox" name="step21.js"> STEP Part 21</label>
      
      <li><label><input type="checkbox" name="scala.js"> Scala</label>
      
      <li><label><input type="checkbox" name="scheme.js"> Scheme</label>
      
      <li><label><input type="checkbox" name="scilab.js"> Scilab</label>
      
      <li><label><input type="checkbox" name="smali.js"> Smali</label>
      
      <li><label><input type="checkbox" name="smalltalk.js"> Smalltalk</label>
      
      <li><label><input type="checkbox" name="stan.js"> Stan</label>
      
      <li><label><input type="checkbox" name="stata.js"> Stata</label>
      
      <li><label><input type="checkbox" name="stylus.js"> Stylus</label>
      
      <li><label><input type="checkbox" name="subunit.js"> SubUnit</label>
      
      <li><label><input type="checkbox" name="tp.js"> TP</label>
      
      <li><label><input type="checkbox" name="taggerscript.js"> Tagger Script</label>
      
      <li><label><input type="checkbox" name="tcl.js"> Tcl</label>
      
      <li><label><input type="checkbox" name="tap.js"> Test Anything Protocol</label>
      
      <li><label><input type="checkbox" name="thrift.js"> Thrift</label>
      
      <li><label><input type="checkbox" name="twig.js"> Twig</label>
      
      <li><label><input type="checkbox" name="vbscript.js"> VBScript</label>
      
      <li><label><input type="checkbox" name="vbscript-html.js"> VBScript in HTML</label>
      
      <li><label><input type="checkbox" name="vhdl.js"> VHDL</label>
      
      <li><label><input type="checkbox" name="vala.js"> Vala</label>
      
      <li><label><input type="checkbox" name="verilog.js"> Verilog</label>
      
      <li><label><input type="checkbox" name="vim.js"> Vim Script</label>
      
      <li><label><input type="checkbox" name="wasm.js"> WebAssembly</label>
      
      <li><label><input type="checkbox" name="mathematica.js"> Wolfram Language</label>
      
      <li><label><input type="checkbox" name="wren.js"> Wren</label>
      
      <li><label><input type="checkbox" name="xl.js"> XL</label>
      
      <li><label><input type="checkbox" name="xquery.js"> XQuery</label>
      
      <li><label><input type="checkbox" name="zephir.js"> Zephir</label>
      
      <li><label><input type="checkbox" name="crmsh.js"> crmsh</label>
      
      <li><label><input type="checkbox" name="dsconfig.js"> dsconfig</label>
      
    </ul>

    <p><button class="download" type="submit">Download</button>
  </form>

  <h2>Node.js</h2>

  <p>Highlight.js can be used on the server through the <a href="http://highlightjs.readthedocs.org/en/latest/api.html">API</a>. The package with all supported languages is installable from <a href="http://npmjs.org">NPM</a>:

  <pre><code class="language-bash">npm install highlight.js</code></pre>

  <p>Alternatively, you can build it from the source:

  <pre><code class="language-bash">node tools/build.js -t node</code></pre>

  <h2>Source</h2>

  <p><a href="https://github.com/highlightjs/highlight.js">Current source</a> is available on GitHub

  <h2>How to use it</h2>

  <p>Refer to the <a href="/usage/">usage document</a>.

</div>

