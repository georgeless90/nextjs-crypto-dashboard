export const mapToChart = (data) =>
  data.map((item) => ({
    x: new Date(item.timestamp).toLocaleDateString(),
    y: item.price,
  }));