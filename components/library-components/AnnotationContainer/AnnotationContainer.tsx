import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import React, { Component, useEffect, useState } from "react";
import Annotation from "react-image-annotation";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import randomColor from "randomcolor";

interface IAnnotationContainer {
  imageSrc: string
}

export default function AnnotationContainer({imageSrc}:IAnnotationContainer) {
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [annotationLabel, setAnnotationLabel] = useState<number>(1)
  const [state, setState] = useState<{
    annotations: any[];
    annotation: Record<string, any>;
    activeAnnotations: any[];
  }>({
    annotations: [],
    annotation: {},
    activeAnnotations: [],
  });

  const onChange = (annotation: any) => {
    setState((old) => ({ ...old, annotation }));
    // console.log(annotation);
  };

  // const onMouseOver = (id: any) => (_e: any) => {
  //   setState((oldState) => {
  //     return {
  //       ...oldState,
  //       activeAnnotations: [...state.activeAnnotations, id],
  //     };
  //   });
  //   console.log(id);
  // };

  useEffect(()=>{
    console.log(state.annotations)
  },[state.annotations])

  const ActiveAnnotationComparator = (a: any, b: any) => {
    return a.data.id === b;
  };

  const Box = ({ children, geometry, style }: any) => (
    <div
      style={{
        ...style,
        position: "absolute",
        left: `${geometry.x}%`,
        top: `${geometry.y}%`,
        height: `${geometry.height}%`,
        width: `${geometry.width}%`,
      }}
    >
      {children}
    </div>
  );

  const onSubmit = (annotation: any) => {
    const { geometry, data, selection } = annotation;
    const color = randomColor();
    setAnnotationLabel(oldLabel => {
      return oldLabel + 1
    })
    if (!showEditForm) {
      setState({
        annotation: {},
        activeAnnotations: [...state.activeAnnotations],
        annotations: state.annotations.concat({
          geometry,
          data: {
            ...data,
            id: Math.random(),
            color: color,
            label: annotationLabel,
          },
          selection,
        }),
      });
    } else {
      setShowEditForm(false);
      const annotations: any[] = state.annotations.map((ant) => {
        if (ant.data.id === annotation.data.id) {
          ant.data.text = annotation.data.text;
        }
        return ant;
      });
      setState((old) => ({ ...old, annotations, annotation: {} }));
    }

    // console.log(annotation);
  };

  const RenderEditor = (props: any) => {
    return (
      <>
        <div
          className="absolute flex space-x-2"
          style={{
            left: state.annotation.geometry.x + "%",
            top:
              state.annotation.geometry.y +
              state.annotation.geometry.height +
              "%",
          }}
        >
          <div className="px-3 py-3 rounded-2xl bg-grayColor w-52">
            {props.annotation?.data?.label && (
              <p className="capitalize text-sm font-semibold text-textColorLight">
              {`label ${props.annotation?.data?.label}`}
            </p>
            )}

            <div className="text-lg capitalize tracking-wide font-semibold text-textColorDark my-3">
              <input
                type="text"
                name="anText"
                placeholder="Name your data"
                onChange={(e) =>
                  props.onChange({
                    ...props.annotation,
                    data: {
                      ...props.annotation.data,
                      text: e.target.value,
                    },
                  })
                }
                defaultValue={props.annotation?.data?.text}
                className="w-full border-none focus:ring-1 ring-primaryColorLight focus:outline-none
              focus:border-none rounded-lg px-3 py-0.5 placeholder:text-textSmall placeholder:font-light
                            "
              />
            </div>
            <div className="w-full px-6 py-2 flex justify-between items-center rounded-2xl bg-whiteColor/30">
              <button type="submit" onClick={props.onSubmit}>
                <CheckCircleIcon className="h-6 w-6 text-greenColor hover:text-green-600" />
              </button>
              <span className="text-textColorLight/50">|</span>
              <span
                onClick={() => {
                  setShowEditForm(false);
                  setState((old) => ({ ...old, annotation: {} }));
                }}
              >
                <XCircleIcon className="h-6 w-6 text-textColorLight/80 hover:text-redColor" />
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };

  const RenderSelector = ({ annotation, active }: any) => {
    const { geometry } = annotation;
    if (!geometry) return null;

    return (
      <Box
        geometry={geometry}
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          border: "solid 4px red",
        }}
      ></Box>
    );
  };

  const RenderHighlight = ({ annotation, active }: any) => {
    const { geometry, data } = annotation;
    if (!geometry) return null;

    return (
      <Box
        key={annotation.data.id}
        geometry={geometry}
        style={{
          border: `solid 4px ${data.color ? annotation.data.color : "red"}`,
          boxShadow: active && "0 0 20px 20px rgba(255, 255, 255, 0.3) inset",
          padding: '4px'
        }}
      >
        <span
          onClick={() => {
            // annotation.selection.showEditor =
            // annotation.selection.mode = "EDITING"
            setShowEditForm(true);
            onChange(annotation);
          }}
          className="inset-x-1 inset-y-1 bg-transparent absolute z-10 "
        ></span>
      </Box>
    );
  };

  const RenderContent = ({ annotation }: any) => {
    const { geometry, data } = annotation;
    return (
      <div
        className="text-textNormal font-semibold tracking-wide"
        key={annotation.data.id}
        style={{
          background: `${data.color ? data.color : "red"}`,
          color: "white",
          padding: "3px 6px",
          position: "absolute",
          //   fontSize: 15,
          left: `${geometry.x}%`,
          top: `${geometry.y + geometry.height}%`,
        }}
      >
        {annotation.data && annotation.data.text}
      </div>
    );
  };

  return (
    <div className="h-full w-full relative inset-0">
      <Annotation
        src={imageSrc}
        alt="Two pebbles anthropomorphized holding hands"
        annotations={state.annotations}
        type={RectangleSelector.TYPE}
        value={state.annotation}
        onChange={onChange}
        onSubmit={onSubmit}
        allowTouch
        renderEditor={RenderEditor}
        renderSelector={RenderSelector}
        renderHighlight={RenderHighlight}
        renderContent={RenderContent}
        activeAnnotationComparator={ActiveAnnotationComparator}
        activeAnnotations={state.activeAnnotations}
        onClick={() => {
          setShowEditForm(false);
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />

      {/* <h4>Annotations</h4>
      <div className="ml-8">
        {state.annotations.map((annotation) => (
          <div
            className="text-textColorLight w-20"
            onClick={onMouseOver(annotation.data.id)}
            // onMouseOut={this.onMouseOut(annotation.data.id)}
            key={annotation.data.id}
          >
            {annotation.data.text}
          </div>
        ))}
      </div> */}
    </div>
  );
}
