import 'isomorphic-fetch';
import React, { useRef } from 'react';

const CreateCup = props => {
  const inputScenario = useRef(null);
  const inputName = useRef(null);

  const handleAddTodo = e => {
    e.preventDefault();
  };

  return (
    <div className="mdl-card mdl-shadow--2dp">
      <form onSubmit={handleAddTodo}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            type="text"
            ref={inputScenario}
            className="mdl-textfield__input"
            id="inputScenario"
          />
          <label className="mdl-textfield__label" htmlFor="inputScenario">
            Which scenario are you playing?
          </label>
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            type="text"
            ref={inputName}
            className="mdl-textfield__input"
            id="inputName"
          />
          <label className="mdl-textfield__label" htmlFor="inputName">
            How would you name this Mythos Cup?
          </label>
        </div>
        <button
          class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
          style={{ display: 'flex' }}
        >
          <i class="material-icons">add</i>
        </button>
      </form>
      <style>{`
						form {
							padding: 10px;
						}
						.mdl-card {
              position: relative;
							margin: auto;
							margin-top: -110px;
              top: 50%;
              min-height: 220px;
							transition: all .3s;
              background-color: rgba(255,255,255,0.95);
						}
					`}</style>
    </div>
  );
};

export default CreateCup;
