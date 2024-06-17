<script setup>
const supabase = useSupabaseClient();



let books = ref('');

const GetData = async () => {
	
	try {
		let { data: books, error } = await supabase.from('books').select('*');	
		console.log(books);
	} catch (error) {
		console.log(error);
	}

          
}

onMounted(async()=>{
	await GetData();
})

</script>
<template>
	<div class="">
		Hi {{ books }}
	</div>
</template>