import { Audio } from 'react-loader-spinner';
import css from "./Loader.module.css";

interface LoaderProps {
    loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
    return (
        <div className={css.loader}>
            {loading && <Audio height="100" width="100" color='grey' ariaLabel='loading' />}
        </div>
    );
}