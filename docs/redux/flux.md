# Flux

Flux in english means "process of flowing", like the liquids, flowing in one direction only. And it literally is just that, an architecture that Facebook used and recommended when it released React to open source community.

We already knew that we had to separate our data logic from UI, because we want to Separate the Concerns. But the typical MVC's bi-directional flow of data is not good enough when you are working on Front-End applications. Because, there are just too many views sharing and changing the same data.

[Facebook Issue](https://youtu.be/nYkdrAPrdcw?t=781)

Like MVC, Flux is also a pattern, which separates the concerns between View and Data, but in contrast it suggests that the data should flow in one direction only(Unidirectional).

If you have worked on an event or publisher subscriber system, it will be easier to grasp the concept. Flux architecture has the following main actors:

* Dispatcher - Which is responsible for pickup of all the Actions(read events) and forwards them to all the Stores. There is only one dispatcher in the application and All the Actions are routed through that only. In a single threaded environment like JavaScript, it means that only one action is being worked on at any given time. Which also means the guarantee of concurrency.

* Store - Stores are responsible for subscribing(listening) to the Actions forwarded by Dispatcher, making required changes to data, and notifying Views.

* View - Views are responsible for rendering the user interface as per the data provided by stores, and repeat that whenever stores tell them to.

* Action - Actions are the events(packets of data) that travels through other parts of the system. They contain a mandatory Type and optional data inside.

<img src="https://facebook.github.io/flux/img/flux-simple-f8-diagram-1300w.png" width="1000x" />

```jsx

import React from "react";
import ReactDOM from "react-dom";
import { Dispatcher } from "flux";
import MicroEvent from "micro-event";

// A Dispatcher
// An example of dispatcher using Facebook's dispatcher library
const AppDispatcher = new Dispatcher();

// A Store
// Single object representing list data and logic
const ListStore = {
  // Actual collection of model data
  items: [],

  event: new MicroEvent(),

  trigger(type) {
    this.event.trigger(type);
  },

  bind(type, callback) {
    this.event.on(type, callback);
  },

  unbind(type, callback) {
    this.event.off(type, callback);
  }
};

// Tell the dispatcher we want to listen for *any*
// dispatched events
AppDispatcher.register(({ actionType, newItem }) => {
  switch (actionType) {
    case "new-item":
      ListStore.items.push(newItem);
      ListStore.trigger("change");
      break;
    default:
      return;
  }
});

// The view

let id = 0;

class ItemList extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    ListStore.bind("change", this.listChanged);
  }

  componentWillUnmount() {
    ListStore.unbind("change", this.listChanged);
  }

  listChanged = () => {
    this.setState({ items: ListStore.items });
  };

  // The handler
  createNewItem = evt => {
    AppDispatcher.dispatch({
      actionType: "new-item",
      newItem: { name: "new item", id: id++ } // example data
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.createNewItem}>New Item</button>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<ItemList />, document.getElementById("root"));



```

[Flux Overview](https://facebook.github.io/flux/docs/in-depth-overview.html)  