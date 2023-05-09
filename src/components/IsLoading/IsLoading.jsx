import { SpinnerCircularSplit } from "spinners-react";

export const IsLoading = () => {
  return (
    <div className="loading">
      <SpinnerCircularSplit
        size={90}
        thickness={140}
        speed={99}
        color="rgba(108, 172, 228, 1)"
        secondaryColor="rgba(221, 221, 221, 1)"
      />
      <h2>Cargando...</h2>
    </div>
  );
};
