import commonSagas from '~/modules/common/state/common.sagas';

export default function* rootSaga() {
  yield [
    ...commonSagas
  ];
}
