import React from 'react';
import PropTypes from 'prop-types';

const App = ({ onNewColor = f => f }) => {
  let title, color;
  const submit = e => {
    e.preventDefault();
    onNewColor(title.value, color.value);
    title.value = '';
    color.value = '#00000';
    title.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={input => (title = input)}
        type="text"
        placeholder="color title..."
        required
      />
      <input ref={input => (color = input)} type="color" />
      <button>Add</button>
    </form>
  );
};

App.propTypes = {
  onNewColor: PropTypes.func
};

export default App;
