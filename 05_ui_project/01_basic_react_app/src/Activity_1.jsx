// Show a hello message to the user in different colors.
// Pass 2 values as props: userName & textColor

export default function MsgBox({ userName, textColor }) {
    return (
        <h1 style={{ color: textColor }}>Hello, {userName}</h1>
    )
}