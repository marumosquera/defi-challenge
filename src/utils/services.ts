export const isValidEthereumAddress = (address: string): boolean => {
    return address.startsWith("0x") && address.length === 42;
  };