<script>

    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();
    
    const todoDate = (new Date()).toISOString().split('T')[0];
    let todoName = "";
    let todoDescription = "";


    function createTodos(){
        let todoConstructor = {"Id": Math.random(), "Name": todoName, "Description": todoDescription, "Date": todoDate};
        dispatch("createTodo", todoConstructor);
    }


</script>

<div class="flex justify-center">
    <form method="post" on:submit|preventDefault={createTodos} class="grid">
        <div class="grid p-4">
            <label class="text-lg font-medium" for="TodoName">
                Name
            </label>
            <input required bind:value={todoName} class=" w-96 p-2 border active:border-purple-700 rounded h-12" type="text" name="TodoName" id="TodoName" placeholder="Todo Name">
        </div>

        <div class="grid p-4">
            <label class="text-lg font-medium " for="Description">
                Description
            </label>
            <input required bind:value={todoDescription} class="w-96 p-2 border rounded   active:border-purple-700 h-20" type="text" name="Description" id="Descriptiom" placeholder="Todo Description">
        </div>

        <div class="p-4 text-center">

            <input value="+ Add Todo" type="submit" class="bg-purple-600 px-16 py-3 hover:bg-gray-800 rounded-md text-white font-medium">
        </div>
        
        
    </form>
</div>