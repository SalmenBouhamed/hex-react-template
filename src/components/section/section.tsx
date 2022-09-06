import "./section.scss"

function Section(props: any) {
    const styles = {
        ...(props.backgroundImage && {backgroundImage: `url("${props.backgroundImage}")`}),
        ...(props.backgroundColor && {backgroundColor: props.backgroundColor}),
        ...(props.background && {background: props.background}),
    }

    return (
        <nav className="Section" style={styles}>
            <div className="page-outer">
                {props.children}
            </div>
        </nav>
    );
};
export default Section