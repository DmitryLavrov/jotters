// const modules = {
//   toolbar: [
//     [{font: []}],
//     [{header: [1, 2, 3, 4, 5, 6, false]}],
//     ['bold', 'italic', 'underline', 'strike'],
//     [{align: []}],
//     [{color: []}, {background: []}],
//     [{script: 'sub'}, {script: 'super'}],
//     ['blockquote', 'code-block'],
//     [{list: 'ordered'}, {list: 'bullet'}],
//     [{indent: '-1'}, {indent: '+1'}],
//     ['link', 'image', 'video'],
//     ['clean']
//   ]
// }

export const showToolbar = {
  toolbar: [
    [{header: [1, 2, 3, 4, 5, 6, false]}],
    ['bold', 'italic', 'underline', 'strike'],
    [{align: []}],
    [{color: []}, {background: []}],
    [{script: 'sub'}, {script: 'super'}],
    ['blockquote', 'code-block'],
    [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
    ['link'],
    ['clean']
  ]
}

export const hideToolbar = {
  toolbar: null
}

export const getTitleFromContent = (content) => {
  const arr = content.split(/\n/)
  while ((arr.length > 0) && (arr[0].trim() === '')) arr.shift()
  const title = (arr.length > 0) && (arr[0].trim())
  return title ? title : 'Noname note'
}
