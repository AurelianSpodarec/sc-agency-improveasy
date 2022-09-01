import { getFileName } from '../../utils/generic';
import ActionButton from '../button/ActionButton';

interface FileUploadProps {
    name: string;
    maxFiles: number;
    fileS3Keys: string[] | null;
    organizeS3KeysByType: (s3Keys: string[] | null) => { images: string[]; other: string[] };
    inputRef: any;
    handleUpload: any;
    handleDelete: (e: any, s3Key: any) => void;
    handleCancel: () => void;
    progress: number | null;
    uploadingFileName: string | null;
    storageURL: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
   name,
   maxFiles,
   fileS3Keys,
   organizeS3KeysByType,
   inputRef,
   handleUpload,
   handleDelete,
   handleCancel,
   progress,
   uploadingFileName,
   storageURL,
}) => {
    const { images, other } = organizeS3KeysByType(fileS3Keys);

    return (
        <div className="file-uploader s12">
            <input
                ref={inputRef}
                style={{ display: 'none' }}
                type="file"
                name={name}
                onChange={handleUpload}
                multiple={maxFiles > 1}
            />

            {other.map((s3Key: any) => (
                <div className="file-item" key={s3Key}>
                    <p className="file-name">{getFileName(s3Key)}</p>
                    <ActionButton source="negative" onClick={e => handleDelete(e, s3Key)} icon="times">
                        Delete
                    </ActionButton>
                </div>
            ))}
            {images.map((s3Key: any) => (
                <div className="image-item" key={s3Key}>
                    <div className="flex-row justify-between top-row">
                        <p className="file-name">{getFileName(s3Key)}</p>
                        <ActionButton
                            source="negative"
                            onClick={e => handleDelete(e, s3Key)}
                            icon="times"
                        >
                            Delete
                        </ActionButton>
                    </div>

                    <img alt={s3Key} src={`${storageURL}/${s3Key}`} style={{ maxWidth: '100%' }} />
                </div>
            ))}

            {progress !== null && (
                <div className="progress">
                    <p className="">
                        {uploadingFileName} <span>{progress}%</span>
                    </p>
                    <ActionButton source="negative" icon="times" onClick={handleCancel}>
                        Cancel
                    </ActionButton>
                </div>
            )}
        </div>
    );
};

export default FileUpload;