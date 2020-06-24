import { moduleHotAccept } from '../main';

test('calls hot', () => {
  delete window.location;
  const reloadSpy = jest.fn();
  window.location = ({
    reload: reloadSpy,
  } as unknown) as Location;
  const acceptSpy = jest.fn((cb: () => void) => cb());
  const mod = {
    hot: {
      accept: acceptSpy,
    },
  };
  moduleHotAccept((mod as unknown) as NodeModule);
  expect(acceptSpy).toHaveBeenCalled();
  expect(reloadSpy).toHaveBeenCalled();
});
