// ResponseChat.jsx
import React, { useCallback, useState, useEffect, useRef } from 'react';
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
	shortUrl
}) {
	// Use tabs instead of spaces
	const [isCopyClicked, setIsCopyClicked] = useState(false);
	const [shouldBlink, setShouldBlink] = useState(isCreatorChatFlow);
	const hasMounted = useRef(false);

	useEffect(() => {
		hasMounted.current = true;
	}, []);

	const handleSend = useCallback(
		(inputValue) => {
		  onSendMessage(inputValue);
		  setResponse('');
		  setIsCopyClicked(false); // Reset the copy link status
		  // Trigger blink only after user sends a message
		  setShouldBlink(false);
		  requestAnimationFrame(() => setShouldBlink(true));
		},
		[onSendMessage, setResponse]
	  );

	const handleCopyClick = useCallback(() => {
		if (shortUrl && shortUrl !== GPT_PAGE_CONSTANTS.SHORT_URL_DEFAULT) {
			navigator.clipboard.writeText(shortUrl);
			setIsCopyClicked(true);
		}
	}, [shortUrl]);

	return (
		<div className={styles.chatContainer}>
			<div className={styles.messagesContainer}>
				<ChatMessage message={query} isUser={true} />
				{response && <ChatMessage message={response} isUser={false} />}
			</div>

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
				<button
					className={`${styles.copyLinkButton} ${shouldBlink ? styles.blink : ''}`}
					onClick={handleCopyClick}
				>
					{isCopyClicked
						? GPT_PAGE_CONSTANTS.COPIED_SHARE_LINK_BUTTON_TEXT
						: GPT_PAGE_CONSTANTS.COPY_SHARE_LINK_BUTTON_TEXT}
				</button>
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
