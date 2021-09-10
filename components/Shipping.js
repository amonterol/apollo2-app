function Shipping() {
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-three-quarters pl-5 pr-5">
        <p className="has-text-left  ">
          La entrega de su compra se realiza a través de Correos de Costa Rica,
          el tiempo de entrega varía según la zona:
        </p>
        <p className="has-text-left">
          En el GAM (Gran Area Metropolitana) la entrega se realizará entre 2 y
          4 días hábiles después de realizada la compra.
        </p>
        <p className="has-text-left">
          En el resto del país la entrega se realizará en un máximo de 4 y 6
          días hábiles después de realizada la compra.
        </p>
      </div>
      <div className="column"></div>
    </div>
  );
}
export default Shipping;
