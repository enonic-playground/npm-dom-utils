export default {
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/*.d.ts',
	],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: {
					sourceMap: true, // Needed to get correct Uncovered Line numbers
				}
			}
		]
	},
}
