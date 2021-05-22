<template><Layout title='Expect Query' description='This page tells about decorator ExpectQuery & how to use this.' keywords='query, secure query, validation, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/decorator/expect-query.md'><p>ExpectQuery is a decorator which helps you to validate query string data. It provides following features -</p>
<ul>
<li>Check data type of incoming query string data against expected query string &amp; automatically convert if possible.</li>
<li>Removes unnecessary data from incoming query string. This helps you to store data in nosql database without retrieving particular property and thus saving lots of code.</li>
</ul>
<p><br></p>
<h2 id="checkdatatype">Check data type</h2>
<p><br>
Consider a http request which sends value id in query string -</p>
<pre><code>http://abc.com/product?id=1
</code></pre>
<p>Here Id being sent is 1 which will be always string (query strings value are always string).In this case you will write codes to convert <code>id</code>  </p>
<p>But when using <code>ExpectQuery</code> it will automatically check the datatype &amp; convert to number.</p>
<p>Let's see how to configure this using <code>ExpectQuery</code></p>
<pre><code>export class ProductController{

    @Route("/")
    @Worker("get")
    @ExpectQuery({ id: 0})
    saveProduct(){
       const id =  this.query.id;
    }
}
</code></pre>
<p>You can also provide a class as parameter. Make sure that class properties are initialized.</p>
<p>e.g - </p>
<pre><code>export class Product {
  id = 0;
}

export class ProductController{

    @Route("/")
    @Worker("get")
    @ExpectQuery(Product)
    saveProduct(){
       const id =  this.query.id;
    }
}
</code></pre>
<p><br></p>
<h2 id="removesunnecessarydatafromincomingbody">Removes unnecessary data from incoming body</h2>
<p><br>
Consider a http request which sends following data in request as query string</p>
<pre><code>{
    name:"ujjwal",
    gender:"male",
    extra:"extra_value" // some extra value which is not required
}
</code></pre>
<p>so url will be  - "http://abc.com/user?name=ujjwal&amp;gender=male&amp;extra=extra_value"</p>
<p>Let's see how to use ExpectQuery to only retrieve value that we want, so that property extra will be removed.</p>
<pre><code>export class UserController{

    @Route("/")
    @Worker("get")
    @ExpectQuery({name:"", gender: ""})
    saveUser(){
       const user =  this.query;
    }
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        