<template><Layout title='Expect Body' description='This page tells about decorator ExpectBody & how to use this.' keywords='body, secure body, validation, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/decorator/expect-body.md'><p>ExpectBody is a decorator which helps you to validate body data. It provides following features -</p>
<ul>
<li>Check data type of incoming body data against expected body.</li>
<li>Removes unnecessary data from incoming body. This helps you to store data in nosql database without retrieving particular property and thus saving lots of code.</li>
</ul>
<p><br></p>
<h2 id="checkdatatype">Check data type</h2>
<p><br>
Consider a post request which sends following data in request </p>
<pre><code>{
    price:"1200",
    name:"black jeans nike"
}
</code></pre>
<p>Here price being sent is 1200 which is string but server expects it to be number. In this case you will write codes to check for data type of <code>price</code> property. </p>
<p>But when using <code>ExpectBody</code> it will automatically check the datatype &amp; if not matches then returns a 400 request. This saves you writing code for validation of property type.</p>
<p>Let's see how to configure this using <code>ExpectBody</code></p>
<pre><code>export class ProductController{

    @Route("/")
    @Worker("post")
    @ExpectBody({ price:0, name:""})
    saveProduct(){
       const product =  this.body;
    }
}
</code></pre>
<p>You can also provide a class as parameter. Make sure that class properties are initialized.</p>
<p>e.g - </p>
<pre><code>export class Product {
  price = 0;
  name = ""
}

export class ProductController{

    @Route("/")
    @Worker("post")
    @ExpectBody(Product)
    saveProduct(){
       const product =  this.body;
    }
}
</code></pre>
<p><br></p>
<h2 id="removesunnecessarydatafromincomingbody">Removes unnecessary data from incoming body</h2>
<p><br>
Consider a post request which sends following data in request </p>
<pre><code>{
    name:"ujjwal gupta",
    gender:"male",
    extra:"some extra value" // some extra value which is not required
}
</code></pre>
<p>now for such requests -</p>
<h3 id="1weeithersavethewholedata">1. We either save the whole data</h3>
<pre><code>export class UserController{

    @Route("/")
    @Worker("post")
    saveUser(){
       const user = this.body;
       // save user into mongodb
       const service = new UserService();
       service.saveUser(user);
    }
}
</code></pre>
<p>In this case - property <code>extra</code> will be saved too &amp; thus your database has now garbage value. This is a very big risk &amp; you shouldn't save data this way when using nosql database.</p>
<h3 id="2extractparticularvaluefrombody">2. Extract particular value from body</h3>
<pre><code>export class UserController{

    @Route("/")
    @Worker("post")
    saveUser(){
       const user = {
           name:this.body.name,
           gender: this.body.gender
       } ;
       // save user into mongodb
       const service = new UserService();
       service.saveUser(user);
    }
}
</code></pre>
<p>this is a good way but consider user value with 10 properties which means you need to write 10 lines of code.</p>
<p>Let's write the above code using <code>ExpectBody</code></p>
<pre><code>export class UserController{

    @Route("/")
    @Worker("post")
    @ExpectBody({name:"", gender: ""})
    saveUser(){
       const user =  this.body;
       // save user into mongodb
       const service = new UserService();
       service.saveUser(user);
    }
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        