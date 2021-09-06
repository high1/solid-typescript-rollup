import { moduleHotAccept } from '../main';

test('calls hot', () => {
  const reloadSpy = jest.fn();
  Object.defineProperty(window, 'location', {
    value: {
      reload: reloadSpy,
    },
    writable: true,
  });
  const acceptSpy = jest.fn((callback: () => void) => callback());
  const module_ = {
    hot: {
      accept: acceptSpy,
    },
  };
  moduleHotAccept(module_ as unknown as NodeModule);
  expect(acceptSpy).toHaveBeenCalled();
  expect(reloadSpy).toHaveBeenCalled();
});
