
import { isValidEthereumAddress } from "../utils/services";

describe('isValidEthereumAddress', () => {
  test('should return true for a valid Ethereum address', () => {
    const validAddress = '0x1234567890abcdef1234567890abcdef12345678';
    expect(isValidEthereumAddress(validAddress)).toBeTruthy();
  });

  test('should return false for an address with incorrect length', () => {
    const invalidLengthAddress = '0x12345678';
    expect(isValidEthereumAddress(invalidLengthAddress)).toBeFalsy();
  });

  test('should return false for an address without 0x prefix', () => {
    const noPrefixAddress = '1234567890abcdef1234567890abcdef12345678';
    expect(isValidEthereumAddress(noPrefixAddress)).toBeFalsy();
  });
});
