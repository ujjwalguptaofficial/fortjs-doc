<template><Layout title='Components' description='Description about components of fortjs' keywords='components, modularize, app, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/components/index.md'><p>Components are most important part of fort application. They are independent &amp; every component has its own lifecycle and scope. It helps you to modularize your app &amp; reutilize codes.</p>
<p>There are three types of components - </p>
<ol>
<li><p><a href="/tutorial/wall">Wall</a></p></li>
<li><p><a href="/tutorial/shield">Shield</a></p></li>
<li><p><a href="/tutorial/guard">Guard</a></p></li>
</ol>
<h1 id="concept">Concept</h1>
<p><img src="/img/fort_component.png" alt="FortJs Architecture" style="height:600px;"/></p>
<p><strong>The above picture shows the architecture of fortjs app and flow of http request inside app -</strong> </p>
<ul>
    <li>
    When a http request comes to your app - it has to go through sequence of components i.e <a href="/tutorial/wall">Wall</a>, <a target="_blank" href="/tutorial/shield">Shield</a> & <a target="_blank" href="/tutorial/guard">Guard</a> and if everyone allows then request is transferred to Worker inside <a target="_blank" href="/tutorial/controller">Controller</a> where the actual resource is present.
    </li>
    <li>The Http Request has to first go through component <a href="/tutorial/wall">Wall</a>. The incoming event of wall is called and if wall 
        <ul>
            <li>Allows - It is sent to next lower level component which is <a target="_blank" href="/tutorial/shield">Shield</a></li>
            <li>Rejects - The result is considered as final result and result is sent as http response & its lifecycle is ended there.</li>
        </ul>
    </li>
    <li>
        After <a href="/tutorial/wall">Wall</a> allows the request, it is sent to <a target="_blank" href="/tutorial/shield">Shield</a> and if shield 
        <ul>
            <li>Allows - It is sent to next component which is <a target="_blank" href="/tutorial/guard">Guard</a> </li>
            <li> Rejects - The result is considered as final result. The result has to go through wall outgoing event and finally http response is sent.</li>
        </ul>
    </li>
    <li>
        After <a target="_blank" href="/tutorial/shield">Shield</a> allows - the request is allowed to go inside <a target="_blank" href="/tutorial/controller">Controller</a> & control is transferred to <a target="_blank" href="/tutorial/guard">Guard</a> & if guard
        <ul>
            <li>Allows - It is sent to Worker where the actual resource is present.</li>
            <li> Rejects - The result is considered as final result. The result has to go through wall outgoing event and finally http response is sent.</li>
        </ul>
    </li>
</ul>
<p><br></p>
<h1 id="importantpoints">Important points</h1>
<p><br></p>
<ul>
<li><p>It is not necessary to create any components, you can have just Controller and Worker. But it is highly recommended to use components since components helps to modularize your app into small dedicated features making your code cleaner, reutilizable &amp; testable.</p></li>
<li><p>Here we saw Components are being used to block the request, but it can be also used to do some work and pass the result from one component to another. Check out particular component to know more. </p></li>
</ul>
<p>e.g - The validation of data, extracting some information like ip address &amp; passing from one component to another etc.</p>
<style>
li{
    padding-top:10px;
}
ul{
    margin-left:10px;
}
</style></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        