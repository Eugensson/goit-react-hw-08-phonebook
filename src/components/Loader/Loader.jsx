import { Grid } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Grid
      height="60"
      width="60"
      color="#000000"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
