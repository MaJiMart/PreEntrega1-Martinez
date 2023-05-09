export const BtnAddCart = () => {
  return (
    <button
      className="btnAdd"
      onClick={() => {
        onAdd(counter);
      }}
    >
      Agregar al carrito
    </button>
  );
};
