# Checkbox Component

A functional checkbox component.

#### Usage

```jsx
<CheckBox
  checked={true
  onChange=Function()
  label="Label"/>
```

#### Example

```jsx
class TestCheckBox extends React.Component {
  // Initial state
  state = { checked: true }

  // Anonymous function so that it has the right 'this'.
  toggle = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }))
  }

  render() {
    return (
      <CheckBox
        checked={this.state.checked}
        onChange={this.toggle}
        label="Hello"
      />
    )
  }
}
```

| propName | propType | defaultValue | isRequired        | Description               |
| -------- | -------- | ------------ | ----------------- | ------------------------- |
| checked  | boolean  |              | no                | Check box                 |
| onChange | function |              | no (with checked) | Function called on change |
| label    | string   |              | no                | Check box label           |
