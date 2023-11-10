---
sidebar_position: 11
title: "Components"
keywords: [components, modularize, app, fortjs, node]
description: "Description about components of fortjs"
---

# Component

Component are most important part of fort application. It helps you to write modular code and reuse. They are independent & every component has its own lifecycle and scope. 

There are three types of components - 

1. [Wall](/docs/component/wall)

2. [Shield](/docs/component/shield)

3. [Guard](/docs/component/guard)

## Concept 

<!-- <img src={require("/static/img/icons/fort_component.png").default} height="600"/> -->

```sql
HTTP Request
    |
Initialize Components
    |
Execute Walls (Incoming)
    |
Execute Shields
    |
Execute Guards
    |
Execute Controller
    |----------------------|
    |                      |
    | Execute Controller   |
    | Method               |
    |                      |
    |----------------------|
    |
Execute Walls (Outgoing)
    |
Response Flow

```

**The above picture shows the architecture of fortjs app and flow of http request inside app -** 

<ul>
    <li>
    When a http request comes to your app - it has to go through sequence of components i.e <a href="/docs/component/wall">Wall</a>, <a target="_blank" href="/docs/component/shield">Shield</a> & <a target="_blank" href="/docs/component/guard">Guard</a> and if everyone allows then request is transferred to Worker inside <a target="_blank" href="/docs/controller">Controller</a> where the actual resource is present.
    </li>
    <li>The Http Request has to first go through component <a href="/docs/component/wall">Wall</a>. The incoming event of wall is called and if wall 
        <ul>
            <li>Allows - It is sent to next lower level component which is <a target="_blank" href="/docs/component/shield">Shield</a></li>
            <li>Rejects - The result is considered as final result and result is sent as http response & its lifecycle is ended there.</li>
        </ul>
    </li>
    <li>
        After [Wall](/docs/component/wall.md) allows the request, it is sent to <a target="_blank" href="/docs/component/shield">Shield</a> and if shield 
        <ul>
            <li>Allows - It is sent to next component which is <a target="_blank" href="/docs/component/guard">Guard</a> </li>
            <li> Rejects - The result is considered as final result. The result has to go through wall outgoing event and finally http response is sent.</li>
        </ul>
    </li>
    <li>
        After <a target="_blank" href="/docs/component/shield">Shield</a> allows - the request is allowed to go inside <a target="_blank" href="/docs/controller">Controller</a> & control is transferred to <a target="_blank" href="/docs/component/guard">Guard</a> & if guard
        <ul>
            <li>Allows - It is sent to Worker where the actual resource is present.</li>
            <li> Rejects - The result is considered as final result. The result has to go through wall outgoing event and finally http response is sent.</li>
        </ul>
    </li>
</ul>

### Summary

* It is not necessary to create any components, you can have just Controller and Worker. But it is highly recommended to use components since components helps to modularize your app into small dedicated features making your code cleaner, reutilizable & testable.

* Here we saw Components are being used to block the request, but it can be also used to do some work and pass the result from one component to another. Check out particular component to know more. 

e.g - The validation of data, extracting some information like ip address & passing from one component to another etc.

 