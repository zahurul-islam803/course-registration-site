
# Added at least 3 project features.

- On this website, users can select their preferred course and keep it in the cart.
- The same course cannot be added to the cart more than once.
- The user cannot keep more than 20 credit hours in the cart.
- The total course price will show in the cart.
- Total hours remaining credit cannot be less than 0 hours.

<br />
 
# How I have managed the state in my assignment project.

  First I loaded data from json file using useEffect State.Then the loaded data is placed in the useState Hook. Then I displayed those data one by one using map. Then select specific data from the displayed data and put it in another useState. Then the previously displayed data and later selected data are shown in the cart according to the name of the course. After that, the selected total course price is added and placed in another uesState and then shown in the cart from there.After adding the selected total credit, put it in another state and show it in the cart. Finally, from the initial total of 20 credits in the cart, the remaining credit after excluding the total selected credit is shown.
