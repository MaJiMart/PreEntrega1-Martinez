export const BtnAddCart = (onAdd) => {
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
