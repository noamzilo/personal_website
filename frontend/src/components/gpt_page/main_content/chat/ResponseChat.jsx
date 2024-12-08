// ResponseChat.jsx
import React, { useCallback } from 'react';
import styles from './ResponseChat.module.css';
import ChatMessage from './ChatMessage';
import ChatInputPane from './ChatInputPane';
import { GPT_PAGE_CONSTANTS } from '../../constants';

function ResponseChat({
	query,
	response,
	extraMessage,
	setResponse,
	onSendMessage,
	onBackClicked,
	isCountdownComplete,
	popupBlocked,
	onProceedClick,
	onStayClicked,
	countdown,
	isCreatorChatFlow,
	redirectUrl,
}) {
	const handleSend = useCallback(
		(inputValue) => {
			onSendMessage(inputValue);
			setResponse('');
		},
		[onSendMessage, setResponse]
	);

	return (
		<div className={styles.chatContainer}>
			<div className={styles.messagesContainer}>
				<ChatMessage message={query} isUser={true} />
				{response && <ChatMessage message={response} isUser={false} />}
				{extraMessage && <ChatMessage message={extraMessage} isUser={false} />}
				<div className={styles.redirectButtonContainer}>
					<button
						className={styles.redirectButton}
						onClick={() => window.open(redirectUrl, '_blank')}
					>
						{GPT_PAGE_CONSTANTS.GO_TO_GPT_REDIRECTION_BUTTON_TEXT}
					</button>
					<button
						className={styles.showAnimationButton}
						onClick={() => {
							const newUrl = `${window.location.pathname}?query=${encodeURIComponent(query)}`;
							window.location.href = newUrl;
						}}
					>
						{GPT_PAGE_CONSTANTS.SHOW_ANIMATION_BUTTON_TEXT}
					</button>
				</div>
			</div>
			<ChatInputPane
				onSubmit={handleSend}
				isAnimating={false}
				animatingTextValue=""
				placeholder={GPT_PAGE_CONSTANTS.QUERY_PLACEHOLDER_CHAT}
			/>
		</div>
	);
}

export default ResponseChat;
