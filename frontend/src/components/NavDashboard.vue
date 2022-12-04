<template>
    <nav class="bg-white mx-10 border-b-2 border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <p class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{{ title }}</span>
            </p>
            <div class="flex items-center md:order-2">
                <button type="button"
                    class="px-2 py-2 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <Icon icon="material-symbols:dark-mode" color="gray" width="25" />    
                </button>
                <button type="button"
                    class="px-2 py-2 mb-2 mr-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <Icon icon="material-symbols:light-mode" color="white" width="25" />    
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
	components: {
		Icon,
	},
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>
