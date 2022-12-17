<script>

    import TodosForm from "./todos-form.svelte";
    let Todos = [];
    //deleting todos in the todo array
    const deleteTodo = (id) => {
        Todos = Todos.filter((todo) => todo.Id !=  id);
    }
   const addTodos =(e) =>{
        const todo = e.detail;
        Todos = [todo, ...Todos];
   }
   
</script>
<TodosForm on:createTodo={addTodos}/>
<h1 class="text-lg mt-8 text-center font-medium">My Todos</h1>
<div class="flex justify-center">
    <div class="p-4">
        {#each Todos as todo (todo.Id)}
            <div class="bg-gray-800 text-white my-2 rounded-md p-6">
                <div class="flex flex-row justify-between">
                    <h1 class="font-medium">{todo.Name}</h1>
                    <h1 class="font-normal text-purple-600 ">{todo.Date}</h1>
                </div>
                <p>{todo.Description}</p>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <p on:click={() => deleteTodo(todo.Id)} class="font-medium cursor-pointer py-1 text-red-500">Delete</p>
            </div>
            {:else}
            <p class="text-center font-medium text-lg"></p>
        {/each}
    </div>
</div>
