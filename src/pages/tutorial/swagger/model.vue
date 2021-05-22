<template><Layout title='Swagger Model' description='Swagger model in fortjs' keywords='swagger, automatic generate, integrate, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/swagger/model.md'><p>A model in swagger is a class. But you may want to have some configuration for your models. </p>
<p><strong>Note :-</strong>  No configuration is required to use a class as model.</p>
<p>Fortjs-Swagger provides following configuration - </p>
<ul>
<li>Optional Property</li>
<li>Ignore Property</li>
<li>Example</li>
</ul>
<p><br></p>
<h2 id="letsseewhataretheusesoftheseconfigurationhowtouse">Let's see what are the uses of these configuration &amp; how to use -</h2>
<p><br>
Consider a model "User" which has following structure - </p>
<pre><code>class User {
    id: string;

    name : String;
    address: string;
    gender: string;

    isValidUser : Function;
}
</code></pre>
<h4 id="optionalproperty">OptionalProperty</h4>
<p>Consider the property <code>id</code> in the model "User" is a primary key which means its automatically generated, In that case - </p>
<ul>
<li><p><code>id</code> is not required in a "POST" request, since new record will be created and new id will be generated for that request.</p></li>
<li><p>But it can be a required field in "PUT" request to identify the record.</p></li>
</ul>
<p>So from above statement we found that id is sometimes required &amp; sometimes not. For this condition - we can use decorator <code>OptionalProperty</code> which will mark the field as optional in swagger doc.</p>
<p><br></p>
<h4 id="ignoreproperty">IgnoreProperty</h4>
<p>Now let's focus on property <code>isValidUser</code>, its a method which is being used internally in the application but it doesn't need to be specified in the swagger doc. So we can use decorator <code>IgnoreProperty</code> which will ignore this property.</p>
<p>After changes - our class will look something like this - </p>
<pre><code>import { IgnoreProperty, OptionalProperty } from "fortjs-swagger";

class User {

    @OptionalProperty
    id: string;

    name : String;
    address: string;
    gender: string;

    @IgnoreProperty
    isValidUser : Function;
}
</code></pre>
<p><br></p>
<h4 id="example">Example</h4>
<p>Fortjs-Swagger calls <code>getExample</code> to generate the example for your model.</p>
<p>e.g - Let's see how we can provide an example for our model "User" </p>
<pre><code>import { IgnoreProperty, OptionalProperty, SwaggerModel } from "fortjs-swagger";

class User implements SwaggerModel {

    @OptionalProperty
    id: string;

    name : String;
    address: string;
    gender: string;

    @IgnoreProperty
    isValidUser : Function;

    // initialize the fields which we want to show in example  
    getExample(){
        this.id = 0;
        this.name = "ujjwal";
        this.address = "Planet earth";
        this.gender = "male";
    }
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        