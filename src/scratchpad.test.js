


const mockFn = jest.fn();
const subject = jest.fn();



test('test mocks', () => {
    subject(mockFn);
    console.log(mockFn);
    expect(mockFn).toHaveBeenCalled();
});