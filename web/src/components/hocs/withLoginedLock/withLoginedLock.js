import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { LOGINED, NOT_LOGINED, LOGINING, UNLOGINING, UNLOGINED } from '../../../constants/login';
import ModalLoading from '../../layouts/ModalLoading/ModalLoading';

import "./withLoginedLock.scss";
import { notifyError } from '../../other/Snackbar/Snackbar';
import { LOADING, LOADED, LOADED_ERROR, NOT_LOADED, UNLOADED } from '../../../constants';
import { REGISTERED, REGISTERING } from '../../../constants/register';

const withLoginedLock = (needLogin = true) => (WrapperComponent) => {
    const HOC = (props) => {
        const { history, loginStatus, registerStatus, loadingDataState } = props;

        const [checked, setChecked] = useState(true);

        const loadingVisible = (loadingDataState === LOADING && registerStatus !== REGISTERING) || loginStatus === UNLOGINING;
        const loadedWithoutLogin = loadingDataState === LOADED && loginStatus !== LOGINED && registerStatus !== REGISTERED;
        const dataNotLoaded = loadingDataState === LOADED_ERROR || loadingDataState === UNLOADED;

        useEffect(() => {
            if (loginStatus === UNLOGINING) {
                setChecked(false);
            }
        }, [loginStatus]);

        useEffect(() => {
            if (loadingVisible) setChecked(false);
            if (checked) return;
            if ((!needLogin && loadedWithoutLogin)
                || (needLogin && dataNotLoaded)) {
                setChecked(true);
                notifyError("Access has blocked by login policy");
                history.push("/");
            }
            setChecked(true);
        }, [loadingDataState]);
        console.log(loadingDataState, registerStatus);
        const wrapper = (
            <div className="with-logined-lock" loading={loadingVisible ? "true" : null}>
                {checked && <WrapperComponent {...props} />}
                {!checked && loadingVisible && <ModalLoading />}
            </div>
        )

        if (loadingVisible) {
            return wrapper;
        }

        return wrapper;
    }

    return compose(
        connect(({ user: { loginStatus, registerStatus, loadingDataState } }) => ({ loginStatus, registerStatus, loadingDataState }))
    )(HOC);
}

export default withLoginedLock;