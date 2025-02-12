import style from './style.module.css';

type Props = {
    name: string;
};

export default function UserIcon ({ name }: Props) {

    const username = (name: string) => {
        const splitName = name.split(' ');

        if (splitName.length > 1) {
            return (splitName[0][0] + splitName[1][0]).toUpperCase();
        }

        return splitName[0].slice(0, 2).toUpperCase();
    };

    return (
        <div className={style.icon}>
            {username(name)}
        </div>
    );
};