/*
 * Este componente debe renderizar un checkbox (<input type="checkbox" />) que se seleccione o des-seleccione al hacer click.
 * Debe tener su propio estado (una variable de tipo booleano que indique si el componente está seleccionado o no)
 * Recibirá dos props: name e initialValue.
 * name indica el nombre del checkbox, será un string que debe ser renderizado a su lado.
 * initialValue es un booleano que indica el valor inicial del checkbox.
 * onChange es una función que se debe disparar cuando el checkbox se selecciona (o des-selecciona), y debe tener como parámetro el valor nuevo del checkbox.
 *
 * DATO: la prop que define si un <input type="checkbox" /> está seleccionado es "checked"
 */
export function UncontrolledCheckbox(props) {
  const [checked, setChecked] = React.useState(props.initialValue);

  function checkboxHandler() {
    setChecked(prevState => !prevState);
  }

  return /*#__PURE__*/React.createElement("label", null, props.name, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    onChange: checkboxHandler,
    checked: checked
  }));
}
/*
 * Este componente debe renderizar una lista de componentes UncontrolledCheckbox.
 * Debes completar ese componente antes de completar este.
 * Recibirá una prop: items.
 * items es un objeto de forma { [nombre]: [valorInicial] }, que liste todos los checkboxes por ejemplo:
 * <ControlledCheckboxList items={
 *   uno: false,
 *   dos: true,
 *   tres: false,
 * } />
 * debe renderizar tres checkboxes, con nombres "uno", "dos" y "tres", que inicien con valores false, true y false respectivamente.
 */

export function CheckboxList(props) {
  const items = Object.entries(props.items);
  const checkBoxList = items.map(item => /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(UncontrolledCheckbox, {
    initialValue: item[1],
    name: item[0]
  })));
  return /*#__PURE__*/React.createElement("ul", null, checkBoxList);
}