---
sidebar_position: 7
title: "Validation"
keywords: "validation, expect-body, expect-query, fortjs, node"
description: "How to validate data in fortjs using different components & decorators."
---

# Validation

Validation is an important part of any application & that's why fortjs provides several components and decorators to help you write validation code in easy & standard way.

Let's see how - 

1. **Using guard** - Guard is a component which sits on top of worker. So you can use guards for validation of incoming data. Read [guard](/docs/components/guard) doc for more information.

2. **Using Shield** - Shield is a component which sits on top of Controller. So you can use shield for checking something before passing control to Controller like checking session, cheking authentication data etc. Read [shield](/docs/components/shield) doc for more information.

3. **Using ExpectBody** - ExpectBody is a decorator which takes value as parameter and compare against incoming body data for data type. It also removes extra property which are not present in expect body value. This makes secure to store data in nosql database. Read [expectBody](/docs/decorators/expect-body) doc for more information.

4. **Using ExpectQuery** - ExpectQuery is similar to ExpectBody but it works for query string data. It does similar things as ExpectBody. Read [expectQuery](/docs/decorators/expect-query) doc for more information.

