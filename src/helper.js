const formatFare = (n = 0) => {
    return `R$ ${n
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+,)/g, '$1.')}`;
  };

  export {formatFare};