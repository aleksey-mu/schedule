/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { Button, Input, Divider, Card } from 'antd';
import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';
import subscript from 'markdown-it-sub';
import superscript from 'markdown-it-sup';
import footnote from 'markdown-it-footnote';
import defList from 'markdown-it-deflist';
import abbreviation from 'markdown-it-abbr';
import insert from 'markdown-it-ins';
import mark from 'markdown-it-mark';
import taskLists from 'markdown-it-task-lists';
import getMDFile from './getMDFile';

import 'highlight.js/styles/atom-one-light.css';
import 'github-markdown-css/github-markdown.css';
import './md-input.scss';

const mdParser = new MarkdownIt({
	html: true,
	linkify: true,
	typographer: true,
	highlight(str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(lang, str).value;
			} catch (__) {
				return '';
			}
		}
		return '';
	},
})
	.use(emoji)
	.use(subscript)
	.use(superscript)
	.use(footnote)
	.use(defList)
	.use(abbreviation)
	.use(insert)
	.use(mark)
	.use(taskLists);

const MDInput = () => {
	const [markdownOutput, setMarkdownOutput] = useState('');
	const [mdLink, setMDLink] = useState('');
	const [mdInputText, setMDInputText] = useState('');

	const { TextArea } = Input;

	const handleClick = async (event) => {
		event.preventDefault();
		const text = await getMDFile(mdLink);
		const html = mdParser.render(text);

		setMDInputText('');
		setMarkdownOutput(DOMPurify.sanitize(html));
	};
	const handleInputChange = (text) => {
		setMDInputText(text);
		const html = mdParser.render(text);
		console.log(mdInputText);
		setMarkdownOutput(DOMPurify.sanitize(html));
	};

	return (
		<div>
			<Card>
				<form>
					<div>
						<label htmlFor='md-input-textarea'>
							Введите описание (поддерживает Markdown разметку):
						</label>
					</div>
					<TextArea
						placeholder='Введите описание'
						rows='5'
						id='md-input-textarea'
						autoSize={{ minRows: 3 }}
						onInput={(event) => handleInputChange(event.target.value)}
						value={mdInputText}
					/>

					<div>
						<label htmlFor='md-link'>Ссылка на MD файл:</label>
					</div>

					<Input
						type='text'
						id='md-link'
						placeholder='https://github.com/rolling-scopes-school/tasks/blob/master/tasks/schedule.md'
						size='40'
						autoComplete='off'
						onChange={(event) => setMDLink(event.target.value)}
					/>
					<Button type='primary' onClick={(event) => handleClick(event)}>
						Отобразить файл
					</Button>
				</form>
				<Divider orientation='left'>Просмотр описания:</Divider>
				<div
					className='markdown-body'
					dangerouslySetInnerHTML={{ __html: markdownOutput }}
				/>
			</Card>
		</div>
	);
};

export { mdParser, MDInput };
