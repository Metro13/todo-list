
<svelte:head>
    <title>My Todos</title>
</svelte:head>
<script>
    
</script>

<div class="p-8 text-center">
    <h1 class="text-4xl font-bold text-purple-600">Create Todos</h1>
    <p class="text-xl font-normal">Create and keep track of your Todos easily.</p>
</div>

<div class="flex justify-center">
    <form class="grid">
        <div class="grid p-4">
            <label class="text-lg font-medium" for="TodoName">
                Name
            </label>
            <input class=" w-96 p-2 border active:border-purple-700 rounded h-10" type="text" name="TodoName" id="TodoName" placeholder="Todo Name">
        </div>

        <div class="grid p-4">
            <label class="text-lg font-medium " for="Description">
                Description
            </label>
            <input class="w-96 p-2 border rounded   active:border-purple-700 h-20" type="text" name="Description" id="Descriptiom" placeholder="Todo Description">
        </div>

        <div class="p-4 text-center">

            <a class="bg-purple-600 px-16 py-3 hover:bg-gray-800 rounded-md text-white font-medium" href="/">+ Add Todo</a>
        </div>
        
        
    </form>
</div>




