# React Component Lifecycle

## Just like us, the Humans, React Components go through different stages in their life. There are predefined methods, that a component can define to do things at a particular stage in their life. These methods can be grouped in following logical events in React

_**bold** very useful_  
_~~strikethrough~~ deprecated in React 17 and prefixed with UNSAFE\_, avoid using them_  
_# newly added in React 16.3, kept here only for completeness_  

- Initialization
  - **constructor**
- Mounting
  - ~~componentWillMount~~
  - static getDerivedStateFromProps #
  - **render**
  - **componentDidMount**
- Updation
  - When props are updated
    - ~~componentWillReceiveProps~~
    - shouldComponentUpdate
    - ~~componentWillUpdate~~
    - static getDerivedStateFromProps #
    - **render**
    - getSnapshotBeforeUpdate() #
    - **componentDidUpdate**
  - When state is updated
    - shouldComponentUpdate
    - ~~componentWillUpdate~~
    - static getDerivedStateFromProps #
    - **render**
    - getSnapshotBeforeUpdate() #
    - **componentDidUpdate**
- Unmounting
  - **componentWillUnmount**
- Error Handling #
  - static getDerivedStateFromError()
  - componentDidCatch()

_Commonly Used Lifecycle Methods(including legacy)_
![Commonly Used Lifecycle Methods](lifecycle.png)

[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)  
[React Component](https://reactjs.org/docs/react-component.html)  