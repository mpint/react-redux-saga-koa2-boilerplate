export const statusProps = {
  isSending: Boolean(),
  status: String(),
  statusCode: Number(Infinity)
};

export const commonModel = {
  isApiResponding: {
    ...statusProps,
    value: Boolean()
  }
};
