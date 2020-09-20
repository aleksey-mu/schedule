import moment from 'moment-timezone';
import FileSaver from 'file-saver';

const ics = require('ics');

const data = [
	{
		time: '9:00:00',
		date: '2020-11-14',
		title: 'RS School event 1',
		url: 'https://app.rs.school/',
		description: 'Скучное описание',
		location: 'online',
		organizer: 'aleksey-mu',
	},
	{
		time: '9:00:00',
		date: '2020-11-15',
		title: 'RS School event 2',
		url: 'https://app.rs.school/',
		description: 'Скучное описание',
		location: 'online',
		organizer: 'aleksey-mu',
	},
];

const createICSEvents = (eventsData) => {
	const eventsArr = [];

	eventsData.forEach((event) => {
		const strStartTime = `${event.date} ${event.time}`;
		const strEndTime = `${event.date} ${event.time}`;

		// parse with Minsk time, and then convert to UTC
		const startTimeUTC = moment.tz(strStartTime, 'Europe/Minsk').utc();
		const endTimeUTC = moment.tz(strEndTime, 'Europe/Minsk').utc();

		// convert dates to array
		const startTime = [
			startTimeUTC.get('year'),
			startTimeUTC.get('month') + 1,
			startTimeUTC.get('date'),
			startTimeUTC.get('hour'),
			startTimeUTC.get('minute'),
		];
		const endTime = [
			endTimeUTC.get('year'),
			endTimeUTC.get('month') + 1,
			endTimeUTC.get('date'),
			endTimeUTC.get('hour'),
			endTimeUTC.get('minute'),
		];

		const formattedEvent = {
			title: event.title,
			url: event.url,
			description: event.description,
			location: event.location,
			busyStatus: 'BUSY',
			calName: 'RS School',
			categories: ['education', 'RS School'],
			status: 'CONFIRMED',
			alarms: [
				{
					action: 'display',
					trigger: { hours: 2, minutes: 30, before: true },
				},
			],
			start: startTime,
			organizer: { name: event.organizer },
			startInputType: 'utc', // define the start time as UTC
			end: endTime,
			endInputType: 'utc', // define the start time as UTC
		};
		eventsArr.push(formattedEvent);
	});

	ics.createEvents(eventsArr, (error, value) => {
		if (error) {
			console.log(error);
			return;
		}
		console.log(value);

		const file = new File([value], 'event.ics', {
			type: 'text/plain;charset=utf-8',
		});
		FileSaver.saveAs(file);
	});
};

export default function yes() {
	createICSEvents(data);
}

// export default createICSEvent;
