/* eslint-disable react/prop-types */
import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
      <div style={{ height: "100vh" }}>
        <PrettyChatWindow
        projectId='049d09a1-2608-41b2-8881-114bb89fae8f'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100vh' }}
        />
      </div>
    );
}

export default ChatsPage