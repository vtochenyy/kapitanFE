import style from './style.module.css';

const UploadComponent = ({ photoBASE64, setPhotoBASE64 }) => {
    const convertPhotoToBASE64String = (selectedPhoto) => {
        return new Promise((res, rej) => {
            if (selectedPhoto.length > 0) {
                let fileToLoad = selectedPhoto[0];
                let fileReader = new FileReader();
                fileReader.onloadend = function (e) {
                    res(e.target.result);
                };
                fileReader.readAsDataURL(fileToLoad);
            } else {
                rej('File lehgth = 0');
            }
        });
    };

    const handleFile = () => {
        let selectedPhoto = document.getElementById(style.input_register_photo).files;
        convertPhotoToBASE64String(selectedPhoto).then((x) => setPhotoBASE64(x));
    };

    return (
        <div className={style.uploadComponentContainer}>
            {!photoBASE64 ? (
                <>
                    <input
                        id={style.input_register_photo}
                        onChange={handleFile}
                        className={style.uploadComponentContainer_input}
                        type="file"
                    ></input>
                    <label
                        htmlFor={style.input_register_photo}
                        className={style.input__file__button}
                    >
                        <span className={style.input__file_button_text}>Загрузите фото</span>
                    </label>
                </>
            ) : (
                <div onClick={() => setPhotoBASE64(null)} className={style.imageContainer}>
                    <img className={style.avaIMG} src={photoBASE64} alt="" />
                </div>
            )}
        </div>
    );
};

export default UploadComponent;
